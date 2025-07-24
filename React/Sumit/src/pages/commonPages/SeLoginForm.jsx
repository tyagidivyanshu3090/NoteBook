import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";
import IosShareIcon from "@mui/icons-material/IosShare";
import Captcha from "../../components/utils/Captcha";
import { useState } from "react";

const SeLoginForm = ({
  userId,
  setUserId,
  captchaInput,
  setCaptchaInput,
  handleCaptchaGenerated,
  handleVerifyAndProceed,
}) => {
  const [mobileError, setMobileError] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    setUserId(value);

    // Validate mobile number
    if (value.length === 0) {
      setMobileError("");
    } else if (!/^[6-9]\d{0,9}$/.test(value)) {
      setMobileError("Mobile number must start with 6, 7, 8, or 9");
    } else if (value.length !== 10) {
      setMobileError("Mobile number must be exactly 10 digits");
    } else {
      setMobileError(""); // valid
    }
  };

  const handleKeyDown = (e) => {
    // Allow only digits and control keys (like Backspace)
    if (!/[\d]/.test(e.key) && !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Box sx={{ mb: "1.5rem", width: "80%", margin: "0 auto" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
          Mobile Number
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={userId}
          onChange={handleMobileChange}
          onKeyDown={handleKeyDown}
          error={!!mobileError}
          helperText={mobileError}
          placeholder="Enter 10-digit mobile number"
          inputProps={{ maxLength: 10 }}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <PersonIcon sx={{ fontSize: 20, color: "#666" }} />
              </Box>
            ),
            sx: { borderRadius: "8px", height: "45px" },
          }}
        />
      </Box>

      <Box sx={{ width: "80%", margin: "0 auto 1.5rem auto" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
          Captcha
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter captcha"
              InputProps={{
                startAdornment: (
                  <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                    <ShieldIcon sx={{ fontSize: 20, color: "#666" }} />
                  </Box>
                ),
                sx: { borderRadius: "8px", height: "45px" },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Captcha onCaptchaGenerated={handleCaptchaGenerated} />
          </Grid>
        </Box>
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
  );
};

export default SeLoginForm;
