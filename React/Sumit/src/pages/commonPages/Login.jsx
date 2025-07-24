import {
  Alert,
  Box,
  Card,
  CardContent,
  Snackbar,
  Tabs,
  Tab,
  Typography,
  Button,
} from "@mui/material";
import { useState, useCallback } from "react";
import CmmsLoginForm from "./CmmsLoginForm";
import SeLoginForm from "./SeLoginForm";
import StateSelector from "./StateSelector";
import { useNavigate } from "react-router-dom";
import IosShareIcon from "@mui/icons-material/IosShare";
import SEHLOService from "../../services/SE-HLO-Service/SEHLOService";
import { decrypt } from "../../components/utils/EncryptDecrypt";
import { useStateContext } from "../../context/StateContext";
import { stateName } from "../mockData/mockDataStateName";

const Login = () => {
  const [loginType, setLoginType] = useState("CMMS");
  const [userId, setUserId] = useState("");
  const { setGlobalState } = useStateContext(); // using the global state which store stateId and StateName
  const [captchaInput, setCaptchaInput] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [stateId, setStateId] = useState("");
  const [showSeLoginForm, setShowSeLoginForm] = useState(false);

  const navigate = useNavigate();

  // <-- 2. MAP THE NEW ARRAY TO THE FORMAT EXPECTED BY StateSelector ({ id, name })
  const mappedStatesList = stateName.map((state) => ({
    id: state.stateCode,
    name: state.stateName,
  }));

  const handleLoginTypeChange = (event, newValue) => {
    setLoginType(newValue);
    setUserId("");
    setCaptchaInput("");
    setGeneratedCaptcha("");
    setStateId("");
    setShowSeLoginForm(false);
  };

  const handleCaptchaGenerated = useCallback((value) => {
    setGeneratedCaptcha(value);
    setCaptchaInput("");
  }, []);

  const handleVerifyAndProceed = () => {
    if (!stateId) {
      setSnackbarMessage("Please select your state.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    const selectedState = mappedStatesList.find((s) => s.id === stateId);
    console.log(selectedState);

    // Save the entire object to the global context
    if (selectedState) {
      setGlobalState({ id: selectedState.id, name: selectedState.name });
    }
    setShowSeLoginForm(true);
  };

  const handleSeLoginFinalSubmit = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!userId || !mobileRegex.test(userId)) {
      setSnackbarMessage(
        "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9."
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    if (!captchaInput || captchaInput.trim() !== generatedCaptcha) {
      setSnackbarMessage("Incorrect CAPTCHA. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const payload = { mobileNumber: userId };
    SEHLOService.authenticate(payload)
      .then((response) => {
        if (decrypt(response.data.message) === "SUCCESS") {
          setSnackbarMessage("CAPTCHA Verified Successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          navigate("/se-otp-verification", {
            state: { userName: userId, stateId },
          });
        } else {
          setSnackbarMessage(response.data);
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.error) {
          setSnackbarMessage("The server is busy. Please try again later.");
        } else if (err?.response?.data) {
          setSnackbarMessage(err.response.data);
        } else {
          setSnackbarMessage("The server is busy. Please try again later.");
        }
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const getSubMessage = () => {
    switch (loginType) {
      case "CMMS":
        return "Enter your user ID to access your account.";
      case "Self-Enumeration(HLO)":
        return "Select your state to begin Self-Enumeration (HLO) login.";
      default:
        return "";
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          minHeight: "80vh",
          boxSizing: "border-box",
        }}
      >
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            width: { xs: "90%", sm: "500px" },
            padding: "20px",
            maxWidth: "90%",
          }}
        >
          <CardContent>
            <Tabs
              value={loginType}
              onChange={handleLoginTypeChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              sx={{
                mb: 2,
                "& .MuiTab-root": {
                  fontWeight: "bold",
                  textTransform: "none",
                },
              }}
            >
              <Tab label="CMMS Login" value="CMMS" />
              <Tab label="SE-HLO Login" value="Self-Enumeration(HLO)" />
            </Tabs>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{
                color: "#000080",
                fontWeight: 600,
                textAlign: "center",
                mb: 1,
              }}
            >
              {loginType} Login
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: "1.5rem", textAlign: "center" }}
            >
              {getSubMessage()}
            </Typography>
            {loginType === "CMMS" && (
              <CmmsLoginForm
                userId={userId}
                setUserId={setUserId}
                captchaInput={captchaInput}
                setCaptchaInput={setCaptchaInput}
                handleCaptchaGenerated={handleCaptchaGenerated}
                handleVerifyAndProceed={handleSeLoginFinalSubmit}
              />
            )}
            {loginType === "Self-Enumeration(HLO)" && !showSeLoginForm && (
              <>
                <Box sx={{ mb: 2 }}>
                  <StateSelector
                    stateId={stateId}
                    setStateId={setStateId}
                    // <-- 3. PASS THE MAPPED LIST TO THE COMPONENT
                    statesList={mappedStatesList}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button
                    variant="contained"
                    onClick={handleVerifyAndProceed}
                    startIcon={<IosShareIcon size={20} />}
                    sx={{
                      backgroundColor: "#ff9933",
                      "&:hover": { backgroundColor: "#e68a00" },
                      borderRadius: "8px",
                      width: "80%",
                      height: "45px",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Verify & Proceed
                  </Button>
                </Box>
              </>
            )}
            {loginType === "Self-Enumeration(HLO)" && showSeLoginForm && (
              <SeLoginForm
                userId={userId}
                setUserId={setUserId}
                captchaInput={captchaInput}
                setCaptchaInput={setCaptchaInput}
                handleCaptchaGenerated={handleCaptchaGenerated}
                handleVerifyAndProceed={handleSeLoginFinalSubmit}
              />
            )}
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ zIndex: 9999 }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
