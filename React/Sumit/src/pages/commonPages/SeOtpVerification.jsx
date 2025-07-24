import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, replace } from "react-router-dom";
import Timer from "../../components/utils/Timer";
import SEHLOService from "../../services/SE-HLO-Service/SEHLOService";
import { decrypt } from "../../components/utils/EncryptDecrypt";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/Auth/Reducer";

const SeOtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isOtpLinkActive, setIsOtpLinkActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userName = location.state?.userName || "";
  const timeLimit = 60;

  useEffect(() => {
    setOtp(["", "", "", "", "", ""]);
  }, []);

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleResendOtp = () => {
    setIsOtpLinkActive(false);
    SEHLOService.resendLoginOTP(userName)
      .then(() => showSnackbar("OTP has been resent.", "success"))
      .catch(() =>
        showSnackbar("The server is busy. Please try again later.", "error")
      );
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      showSnackbar("Please enter a valid 6-digit OTP.", "error");
      return;
    }

    SEHLOService.validateOTP(userName, enteredOtp)
      .then((response) => {
        const status = decrypt(response?.data?.status || "");

        if (status === "VERIFIED") {
          dispatch(
            setCredentials({
              username: response.data.mobileNumber,
              jwt: response.data.jwt,
              refreshToken: response.data.refreshToken,
            })
          );

          showSnackbar("OTP Verified Successfully!", "success");
          navigate("/self-enum-hlo", { replace: true });
        } else {
          throw new Error("Invalid status");
        }
      })
      .catch(() => showSnackbar("Invalid OTP. Please try again.", "error"));
  };

  return (
    <Box
      sx={{
        mt: { xs: "6rem", sm: "10rem", md: "7rem" },
        px: 2,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          OTP Verification
        </Typography>

        {userName && (
          <Typography variant="body2" sx={{ mb: 2 }}>
            OTP sent to: <strong>{userName}</strong>
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 0.5, sm: 1 },
            my: 2,
          }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (otpRefs.current[index] = el)}
              variant="outlined"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "20px",
                },
              }}
              sx={{
                width: { xs: "2rem", sm: "2.8rem" },
                borderRadius: "8px",
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={handleVerifyOtp}
          startIcon={<ShieldIcon />}
          fullWidth
          sx={{
            backgroundColor: "#4CAF50",
            "&:hover": { backgroundColor: "#45a049" },
            borderRadius: "8px",
            padding: "0.75rem",
            fontWeight: "bold",
            mt: 2,
            textTransform: "none",
          }}
        >
          Verify OTP
        </Button>

        <Box sx={{ mt: 2 }}>
          {isOtpLinkActive ? (
            <Box sx={{ color: "text.secondary" }}>
              Didn't get the OTP?{" "}
              <Box
                component="span"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "primary.main",
                }}
                onClick={handleResendOtp}
              >
                Resend OTP
              </Box>
            </Box>
          ) : (
            <Box sx={{ color: "text.secondary" }}>
              Didn't get the OTP? Resend in{" "}
              <Timer
                onTimeout={() => setIsOtpLinkActive(true)}
                timeLimit={timeLimit}
              />{" "}
              seconds
            </Box>
          )}
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{ zIndex: 9999 }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default SeOtpVerification;
