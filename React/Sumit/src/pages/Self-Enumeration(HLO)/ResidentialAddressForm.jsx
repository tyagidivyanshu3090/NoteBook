import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  FormHelperText,
  CardContent,
  Snackbar,
  Alert,
  Tooltip, // Added Tooltip for potential use or if you want to fall back to it
} from "@mui/material";
import { useSelector } from "react-redux";
import { useStateContext } from "../../context/StateContext";

// MUI Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PushPinIcon from "@mui/icons-material/PushPin";
import MapIcon from "@mui/icons-material/Map";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

// Mock Data
import {
  districts,
  subDistricts,
  towns as allTownsData,
} from "../mockData/mockDataResidentialForm";

// Configuration array for form fields
const formFieldConfig = [
  {
    name: "state",
    label: "State",
    type: "text",
    icon: <MapIcon />,
    disabled: true,
    gridSizeSm: 4, // Default grid size for non-selects
  },
  {
    name: "district",
    label: "District*", // Consistent single asterisk
    type: "select",
    options: "districtsList",
    disabled: (address, lists, stateId) => !stateId,
    gridSizeSm: 6, // Increased width to prevent truncation
  },
  {
    name: "subDistrict",
    label: "Subdistrict*", // Consistent single asterisk
    type: "select",
    options: "subDistrictsList",
    disabled: (address) => !address.district,
    gridSizeSm: 6, // Increased width to prevent truncation
  },
  {
    name: "town",
    label: "Town/Village*", // Consistent single asterisk
    type: "select",
    options: "townsList",
    disabled: (address) => !address.subDistrict,
    gridSizeSm: 6, // Increased width to prevent truncation
  },
  {
    name: "locality",
    label: "Locality / Street Name*", // Consistent single asterisk
    type: "text",
    icon: <LocationOnIcon />,
    gridSizeSm: 4,
  },
  {
    name: "wardCode",
    label: "Ward Code", // No asterisk, as it's conditionally required by helperText
    type: "text",
    icon: <ConfirmationNumberIcon />,
    helperText: "Required only if location is a Town",
    disabled: (address, lists, stateId, townType) => townType !== "Town",
    gridSizeSm: 4,
  },
  {
    name: "pincode",
    label: "Pincode*", // Consistent single asterisk
    type: "text",
    icon: <PushPinIcon />,
    inputProps: { maxLength: 6 },
    gridSizeSm: 4,
  },
  {
    name: "latitude",
    label: "Latitude",
    type: "text",
    icon: <GpsFixedIcon />,
    disabled: true,
    gridSizeSm: 4,
  },
  {
    name: "longitude",
    label: "Longitude",
    type: "text",
    icon: <GpsFixedIcon />,
    disabled: true,
    gridSizeSm: 4,
  },
];

const ResidentialAddressForm = ({ handleNext, handleFormDataChange }) => {
  const { username } = useSelector((state) => state.jwtAuthentication);
  const { globalState } = useStateContext();
  const { id: stateId, name: stateName } = globalState || {};

  const [address, setAddress] = useState({
    state: "",
    district: "",
    subDistrict: "",
    town: "",
    wardCode: "",
    locality: "",
    mobile: "",
    pincode: "",
    latitude: "",
    longitude: "",
  });

  const [districtsList, setDistrictsList] = useState([]);
  const [subDistrictsList, setSubDistrictsList] = useState([]);
  const [townsList, setTownsList] = useState([]);
  const [selectedTownType, setSelectedTownType] = useState("");
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (username) setAddress((prev) => ({ ...prev, mobile: username }));
    if (stateId) setAddress((prev) => ({ ...prev, state: stateId }));
  }, [username, stateId]);

  useEffect(() => {
    if (!stateId) {
      setDistrictsList([]);
      setAddress((prev) => ({
        ...prev,
        district: "",
        subDistrict: "",
        town: "",
      }));
      return;
    }
    setDistrictsList(districts.filter((d) => d.stateCode === stateId));
    setAddress((prev) => ({
      ...prev,
      district: "",
      subDistrict: "",
      town: "",
    }));
  }, [stateId]);

  useEffect(() => {
    if (!address.district) {
      setSubDistrictsList([]);
      setAddress((prev) => ({ ...prev, subDistrict: "", town: "" }));
      return;
    }
    setSubDistrictsList(
      subDistricts.filter((sd) => sd.districtId === address.district)
    );
    setAddress((prev) => ({ ...prev, subDistrict: "", town: "" }));
  }, [address.district]);

  useEffect(() => {
    if (!address.subDistrict) {
      setTownsList([]);
      setAddress((prev) => ({ ...prev, town: "" }));
      return;
    }
    setTownsList(
      allTownsData.filter((t) => t.subDistrictId === address.subDistrict)
    );
    setAddress((prev) => ({ ...prev, town: "" }));
  }, [address.subDistrict]);

  const validate = () => {
    const newErrors = {};
    if (!address.district) newErrors.district = "District is required.";
    if (!address.subDistrict)
      newErrors.subDistrict = "Subdistrict is required.";
    if (!address.town) newErrors.town = "Town/Village is required.";
    if (selectedTownType === "Town" && !address.wardCode)
      newErrors.wardCode = "Ward Code is required for a Town.";
    if (!address.locality) newErrors.locality = "Locality is required.";
    if (!/^\d{6}$/.test(address.pincode))
      newErrors.pincode = "A valid 6-digit Pincode is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));

    if (name === "town") {
      const selectedTown = townsList.find((t) => t.id === value);
      setSelectedTownType(selectedTown?.type || "");
      // Clear wardCode if town type changes to Village
      if (selectedTown?.type === "Village") {
        setAddress((prev) => ({ ...prev, wardCode: "" }));
        // Also clear any wardCode error if it exists
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.wardCode;
          return newErrors;
        });
      }
    }
    // Clear error for the current field if user starts typing/selecting
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSaveAndNext = (e) => {
    e.preventDefault();
    if (!validate()) {
      showSnackbar("Please fill all required fields correctly.", "error");
      return;
    }
    handleFormDataChange("locationDetails", address);
    showSnackbar("Location saved successfully!", "success");
    handleNext();
  };

  const isSaveDisabled =
    !address.district ||
    !address.subDistrict ||
    !address.town ||
    !address.locality ||
    !/^\d{6}$/.test(address.pincode) ||
    (selectedTownType === "Town" && !address.wardCode);

  return (
    <Box component="form" onSubmit={handleSaveAndNext} sx={{ p: "20px" }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ color: "#000080", fontWeight: 600, mb: 3 }}
        >
          Location Details
        </Typography>

        <Grid container spacing={2}>
          {formFieldConfig.map((field) => {
            const isDisabled =
              typeof field.disabled === "function"
                ? field.disabled(
                    address,
                    { districtsList, subDistrictsList, townsList },
                    stateId,
                    selectedTownType
                  )
                : field.disabled;
            const optionsList =
              field.type === "select"
                ? { districtsList, subDistrictsList, townsList }[field.options]
                : [];

            return (
              <Grid
                item
                xs={12}
                sm={field.gridSizeSm || 4} // Use custom gridSizeSm from config, default to 4
                key={field.name}
              >
                {field.type === "select" ? (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors[field.name]}
                  >
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                      name={field.name}
                      value={address[field.name]}
                      onChange={handleChange}
                      label={field.label}
                      disabled={isDisabled}
                    >
                      <MenuItem value="" disabled>
                        <em>Select...</em>
                      </MenuItem>
                      {optionsList.map((opt) => (
                        <MenuItem key={opt.id} value={opt.id}>
                          {opt.name} {opt.type ? `(${opt.type})` : ""}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors[field.name] && (
                      <FormHelperText>{errors[field.name]}</FormHelperText>
                    )}
                  </FormControl>
                ) : (
                  <TextField
                    fullWidth
                    size="small"
                    name={field.name}
                    label={field.label}
                    value={
                      field.name === "state"
                        ? stateName || "Loading..."
                        : address[field.name]
                    }
                    onChange={handleChange}
                    disabled={isDisabled}
                    required={field.label.includes("*")} // Mui TextField will add a visual * if this is true
                    helperText={field.helperText}
                    inputProps={field.inputProps}
                    error={!!errors[field.name]} // Show error state for text fields
                    InputProps={{
                      startAdornment: field.icon && (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          {React.cloneElement(field.icon, {
                            sx: { fontSize: 20, color: "#666" },
                          })}
                        </Box>
                      ),
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSaveDisabled}
            sx={{
              backgroundColor: "#ff9933",
              "&:hover": { backgroundColor: "#e68a00" },
              borderRadius: "8px",
              padding: "0.75rem 2rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Save & Next
          </Button>
        </Box>
      </CardContent>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ResidentialAddressForm;
