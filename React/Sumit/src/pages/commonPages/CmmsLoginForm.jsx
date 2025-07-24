import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";
import IosShareIcon from "@mui/icons-material/IosShare";
import Captcha from "../../components/utils/Captcha";

const CmmsLoginForm = ({
  userId,
  setUserId,
  captchaInput,
  setCaptchaInput,
  handleCaptchaGenerated,
  handleVerifyAndProceed,
}) => (
  <>
   
    <Box sx={{ mb: "1.5rem", width: "80%", margin: "0 auto" }}>
      <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
        User ID
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter your user ID"
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

    <Grid container sx={{ marginTop: "2%", justifyContent: "center" }}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Link
          href="/forgotuserid"
          variant="body2"
          sx={{
            color: "#ff9933",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Forgot User ID?
        </Link>
      </Grid>
    </Grid>
  </>
);

export default CmmsLoginForm;
