import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import SEHLOService from "../../services/SE-HLO-Service/SEHLOService";
import { useNavigate } from "react-router-dom";

const SeHLOTable = () => {
  const [locationDetails, setLocationDetails] = useState({});
  const [applicationDetails, setApplicationDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const getLicenseDetailsByUsername = () => {
    setIsLoading(true);
    SEHLOService.getLicenseDetailsByUsername()
      .then((res) => {
        setLocationDetails(res.data);
        // console.log("Location Details:", res.data);
      })
      .catch(() => setLocationDetails(null))
      .finally(() => setIsLoading(false));
  };

  const getApplicationDetails = () => {
    setIsLoading(true);
    SEHLOService.getDetails()
      .then((res) => {
        setApplicationDetails(res.data);
        //console.log("Application Details:", res.data);
      })
      .catch((error) => {
        const backendMessage =
          error?.response?.data?.message || // structured JSON
          error?.response?.data || // plain string
          "Failed to get application details. Please try again.";

        showSnackbar(backendMessage, "error");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getLicenseDetailsByUsername();
  }, []);

  useEffect(() => {
    getApplicationDetails();
  }, []);

  const handleConfrimSubmit = () => {
    console.log("Location application confirmed");
    navigate("/add-details" );
    setDialogOpen(false);
  };

  const applyForLocation = () => {
    setDialogOpen(true);
  };

  const hasValidApplication =
    applicationDetails &&
    Object.keys(applicationDetails).length > 0 &&
    applicationDetails.loginId;
  // console.log(hasValidApplication);
  const isLocationActive =
    locationDetails?.status?.trim().toLowerCase() === "active";
  // console.log(isLocationActive);
  return (
    <>
      {hasValidApplication ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
          }}
        >
          <Grid container mt={2} sx={{ width: "600px" }}>
            <Grid item xs={12}>
              <TableContainer>
                <Table sx={{ border: 0.5, borderColor: "grey.500" }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "tablecolor.main",
                        color: "tablecolor.text",
                      }}
                    >
                      <TableCell
                        sx={{ fontWeight: "bold", padding: 1, width: "60px" }}
                      >
                        Sl. No.
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 1 }}>
                        Last Active Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 1 }}>
                        Mobile Number
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 1 }}>
                        Status
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", padding: 1 }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {/* Sl. No. */}
                      <TableCell padding="8px">1</TableCell>

                      {/* Last Active Date (from updated) */}
                      <TableCell padding="8px">
                        {applicationDetails?.updated?.slice(0, 10) || "-"}
                      </TableCell>

                      {/* Application Number (Not present in JSON, fallback) */}
                      <TableCell padding="8px">
                        {applicationDetails?.loginId?.mobileNumber || "-"}
                      </TableCell>

                      {/* Mobile Number */}
                      {/* Status */}
                      <TableCell padding="8px">
                        {applicationDetails?.status || "-"}
                      </TableCell>

                      {/* Actions */}
                      <TableCell padding="8px">
                        <Tooltip title="View">
                          <IconButton color="success">
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                        {(applicationDetails.applicationStatus ===
                          "Not Completed" ||
                          applicationDetails.applicationStatus ===
                            "Under Review") && (
                          <Tooltip title="Edit">
                            <IconButton color="info">
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        {applicationDetails.applicationStatus !==
                          "Not Completed" && (
                          <Tooltip title="Download">
                            <IconButton color="info">
                              <DownloadIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      ) : isLocationActive ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
          }}
        >
          <TableContainer
            component={Box}
            sx={{
              width: "600px",
              border: "1px solid",
              color: "primary.main",
              borderRadius: "10px",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left">
                    <Typography variant="h6" color="textcolor.text">
                      Please enter your full location details to proceed with
                      Census Self Enumeration?
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 1 }}
                      onClick={applyForLocation}
                    >
                      Apply
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        !isLoading && (
          <Typography textAlign="center" mt={4}>
            No Records Found
          </Typography>
        )
      )}

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to apply for Location Details?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialogOpen(false)}
            color="error"
            variant="outlined"
          >
            No
          </Button>
          <Button
            onClick={handleConfrimSubmit}
            color="primary"
            variant="contained"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SeHLOTable;
