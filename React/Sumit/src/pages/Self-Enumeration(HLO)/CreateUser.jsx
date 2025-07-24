import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Select,
  Grid,
  MenuItem,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Import Material-UI Icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge"; // For Identity
import HomeIcon from "@mui/icons-material/Home"; // For Address
import LocationOnIcon from "@mui/icons-material/LocationOn"; // For Locality/City/District/State
import PushPinIcon from "@mui/icons-material/PushPin"; // For PIN
import ModeStandbyIcon from "@mui/icons-material/ModeStandby"; // For Collection Mode
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // For User Role

const CreateUser = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    emailId: "",
    mobileNumber: "",
    dateOfBirth: null,
    designation: "",
    organization: "",
    identityType: "",
    identityNumber: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    addressLine4: "",
    addressLine5: "",
    addressLine6: "",
    pin: "",
    collectionMode: "",
    userRole: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});
  // State for Snackbar notifications
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  // Handle DatePicker changes
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
    }));
    // Clear error for dateOfBirth
    if (errors.dateOfBirth) {
      setErrors((prevErrors) => ({ ...prevErrors, dateOfBirth: "" }));
    }
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name (Required, Length 2-33)
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First Name is required.";
      isValid = false;
    } else if (
      formData.firstName.length < 2 ||
      formData.firstName.length > 33
    ) {
      tempErrors.firstName = "First Name must be 2-33 characters long.";
      isValid = false;
    }

    // Middle Name (Optional, Length 1-33)
    if (
      formData.middleName.trim() &&
      (formData.middleName.length < 1 || formData.middleName.length > 33)
    ) {
      tempErrors.middleName = "Middle Name must be 1-33 characters long.";
      isValid = false;
    }

    // Last Name (Optional, Length 1-33)
    if (
      formData.lastName.trim() &&
      (formData.lastName.length < 1 || formData.lastName.length > 33)
    ) {
      tempErrors.lastName = "Last Name must be 1-33 characters long.";
      isValid = false;
    }

    // Gender (Required)
    if (!formData.gender) {
      tempErrors.gender = "Gender is required.";
      isValid = false;
    }

    // Email Id (Optional, Length 8-254, Basic email regex)
    if (formData.emailId.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !emailRegex.test(formData.emailId) ||
        formData.emailId.length < 8 ||
        formData.emailId.length > 254
      ) {
        tempErrors.emailId =
          "Invalid Email Id (8-254 characters, e.g., user@example.com).";
        isValid = false;
      }
    }

    // Mobile Number (Required, Length 10, Numeric)
    if (!formData.mobileNumber.trim()) {
      tempErrors.mobileNumber = "Mobile Number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Mobile Number must be 10 digits.";
      isValid = false;
    }

    // Date of Birth (Required)
    if (!formData.dateOfBirth) {
      tempErrors.dateOfBirth = "Date of Birth is required.";
      isValid = false;
    }

    // Designation (Required, Length 2-50)
    if (!formData.designation.trim()) {
      tempErrors.designation = "Designation is required.";
      isValid = false;
    } else if (
      formData.designation.length < 2 ||
      formData.designation.length > 50
    ) {
      tempErrors.designation = "Designation must be 2-50 characters long.";
      isValid = false;
    }

    // Organization (Required, Length 4-99)
    if (!formData.organization.trim()) {
      tempErrors.organization = "Organization is required.";
      isValid = false;
    } else if (
      formData.organization.length < 4 ||
      formData.organization.length > 99
    ) {
      tempErrors.organization = "Organization must be 4-99 characters long.";
      isValid = false;
    }

    // Identity Type (Required)
    if (!formData.identityType) {
      tempErrors.identityType = "Identity Type is required.";
      isValid = false;
    }

    // Identity Number (Required, Length 6-16)
    if (!formData.identityNumber.trim()) {
      tempErrors.identityNumber = "Identity Number is required.";
      isValid = false;
    } else if (
      formData.identityNumber.length < 6 ||
      formData.identityNumber.length > 16
    ) {
      tempErrors.identityNumber =
        "Identity Number must be 6-16 characters long.";
      isValid = false;
    }

    // Address Line 1 (Premises) (Required, Length 10-60)
    if (!formData.addressLine1.trim()) {
      tempErrors.addressLine1 = "Address Line 1 is required.";
      isValid = false;
    } else if (
      formData.addressLine1.length < 10 ||
      formData.addressLine1.length > 60
    ) {
      tempErrors.addressLine1 = "Address Line 1 must be 10-60 characters long.";
      isValid = false;
    }

    // Address Line 2 (Locality) (Optional, Length 10-60)
    if (
      formData.addressLine2.trim() &&
      (formData.addressLine2.length < 10 || formData.addressLine2.length > 60)
    ) {
      tempErrors.addressLine2 = "Address Line 2 must be 10-60 characters long.";
      isValid = false;
    }

    // Address Line 3 (Village/ Town/ City) (Required, Length 4)
    if (!formData.addressLine3.trim()) {
      tempErrors.addressLine3 = "Village/Town/City is required.";
      isValid = false;
    } else if (formData.addressLine3.length !== 4) {
      // Strict length check
      tempErrors.addressLine3 = "Village/Town/City must be 4 characters long.";
      isValid = false;
    }

    // Address Line 4 (Sub-District) (Required, Length 3)
    if (!formData.addressLine4.trim()) {
      tempErrors.addressLine4 = "Sub-District is required.";
      isValid = false;
    } else if (formData.addressLine4.length !== 3) {
      // Strict length check
      tempErrors.addressLine4 = "Sub-District must be 3 characters long.";
      isValid = false;
    }

    // Address Line 5 (District) (Required, Length 2)
    if (!formData.addressLine5.trim()) {
      tempErrors.addressLine5 = "District is required.";
      isValid = false;
    } else if (formData.addressLine5.length !== 2) {
      // Strict length check
      tempErrors.addressLine5 = "District must be 2 characters long.";
      isValid = false;
    }

    // Address Line 6 (State) (Required, Length 2)
    if (!formData.addressLine6.trim()) {
      tempErrors.addressLine6 = "State is required.";
      isValid = false;
    } else if (formData.addressLine6.length !== 2) {
      // Strict length check
      tempErrors.addressLine6 = "State must be 2 characters long.";
      isValid = false;
    }

    // PIN (Required, Length 6, Numeric)
    if (!formData.pin.trim()) {
      tempErrors.pin = "PIN is required.";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.pin)) {
      tempErrors.pin = "PIN must be 6 digits.";
      isValid = false;
    }

    // Collection Mode (Required)
    if (!formData.collectionMode) {
      tempErrors.collectionMode = "Collection Mode is required.";
      isValid = false;
    }

    // User Role (Required, Length 2)
    if (!formData.userRole.trim()) {
      tempErrors.userRole = "User Role is required.";
      isValid = false;
    } else if (formData.userRole.length !== 2) {
      // Strict length check
      tempErrors.userRole = "User Role must be 2 characters long.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSnackbarMessage("Form submitted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      console.log("Form Data:", formData);
      // Here you would typically send the formData to your backend API
    } else {
      setSnackbarMessage("Please correct the errors in the form.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  // Handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
          minWidth: "85%",
        }}
      >
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            width: "150vh",
            padding: "20px",
            backgroundColor: "#ffffff",
            // height: "75vh",
            overflowY: "auto", // Add scroll for overflow content
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{
                color: "#000080",
                fontWeight: 600,
              }}
            >
              User Account Creation
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              gutterBottom
              sx={{
                color: "#000080",
                fontWeight: 600,
                mb: 3,
              }}
            >
              User Account Creation
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              {/* Personal Details */}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#000080", mt: 2, mb: 1 }}
              >
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="Enter First Name"
                    inputProps={{ maxLength: 33, minLength: 2 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <AccountCircle sx={{ fontSize: 20, color: "#666" }} />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Middle Name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    error={!!errors.middleName}
                    helperText={errors.middleName}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Middle Name"
                    inputProps={{ maxLength: 33 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <AccountCircle sx={{ fontSize: 20, color: "#666" }} />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter Last Name"
                    inputProps={{ maxLength: 33 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <AccountCircle sx={{ fontSize: 20, color: "#666" }} />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    label="Date of Birth *"
                    value={formData.dateOfBirth}
                    onChange={handleDateChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.dateOfBirth,
                        helperText: errors.dateOfBirth,
                        variant: "outlined",
                        placeholder: "YYYY-MM-DD",
                        InputProps: {
                          sx: { borderRadius: "8px", height: "45px" },
                        },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl
                    component="fieldset"
                    error={!!errors.gender}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  >
                    <FormLabel component="legend">Gender *</FormLabel>
                    <RadioGroup
                      row
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="M"
                        control={<Radio />}
                        label="Male"
                        sx={{ height: "35px" }}
                      />
                      <FormControlLabel
                        value="F"
                        control={<Radio />}
                        label="Female"
                        sx={{ height: "35px" }}
                      />
                      <FormControlLabel
                        value="O"
                        control={<Radio />}
                        label="Other"
                        sx={{ height: "35px" }}
                      />
                    </RadioGroup>
                    {errors.gender && (
                      <Typography color="error" variant="caption">
                        {errors.gender}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", gap: 3 }}>
                {/* Contact Information */}
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#000080", mt: 2, mb: 1 }}
                  >
                    Contact Information
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email Id"
                        name="emailId"
                        type="email"
                        value={formData.emailId}
                        onChange={handleChange}
                        error={!!errors.emailId}
                        helperText={errors.emailId}
                        fullWidth
                        variant="outlined"
                        placeholder="e.g., your.name@example.com"
                        inputProps={{ maxLength: 254 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <EmailIcon sx={{ fontSize: 20, color: "#666" }} />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mobile Number"
                        name="mobileNumber"
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        error={!!errors.mobileNumber}
                        helperText={errors.mobileNumber}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="e.g., 9876543210"
                        inputProps={{ maxLength: 10 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <PhoneIcon sx={{ fontSize: 20, color: "#666" }} />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                {/* Professional Details */}
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#000080", mt: 2, mb: 1 }}
                  >
                    Professional Details
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        error={!!errors.designation}
                        helperText={errors.designation}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="e.g., Software Engineer"
                        inputProps={{ maxLength: 50, minLength: 2 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <WorkIcon sx={{ fontSize: 20, color: "#666" }} />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        error={!!errors.organization}
                        helperText={errors.organization}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="e.g., ABC Corporation"
                        inputProps={{ maxLength: 99, minLength: 4 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <BusinessIcon
                                sx={{ fontSize: 20, color: "#666" }}
                              />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              {/* Identity Details */}
              <Box sx={{ display: "flex", gap: 3 }}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#000080", mt: 2, mb: 1 }}
                  >
                    Identity Details
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        required
                        error={!!errors.identityType}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                          width: "26vh",
                        }}
                      >
                        <InputLabel>Identity Type *</InputLabel>
                        <Select
                          label="Identity Type *"
                          name="identityType"
                          value={formData.identityType}
                          onChange={handleChange}
                          sx={{}}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="A">Aadhaar Card</MenuItem>
                          <MenuItem value="P">Passport</MenuItem>
                          <MenuItem value="D">Driver's License</MenuItem>
                          <MenuItem value="V">Voter ID</MenuItem>
                        </Select>
                        {errors.identityType && (
                          <Typography color="error" variant="caption">
                            {errors.identityType}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Identity Number"
                        name="identityNumber"
                        value={formData.identityNumber}
                        onChange={handleChange}
                        error={!!errors.identityNumber}
                        helperText={errors.identityNumber}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="Enter Identity Number"
                        inputProps={{ maxLength: 16, minLength: 6 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <BadgeIcon sx={{ fontSize: 20, color: "#666" }} />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box>
                  {/* Collection & Role Details */}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#000080", mt: 2, mb: 1 }}
                  >
                    Collection & Role Details
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        required
                        error={!!errors.collectionMode}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                          width: "26vh",
                          justifyContent: "center",
                        }}
                      >
                        <InputLabel>Collection Mode *</InputLabel>
                        <Select
                          label="Collection Mode *"
                          name="collectionMode"
                          value={formData.collectionMode}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="O">Online</MenuItem>
                          <MenuItem value="P">Physical</MenuItem>
                        </Select>
                        {errors.collectionMode && (
                          <Typography color="error" variant="caption">
                            {errors.collectionMode}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="User Role"
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleChange}
                        error={!!errors.userRole}
                        helperText={errors.userRole}
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="e.g., AD"
                        inputProps={{ maxLength: 2, minLength: 2 }}
                        InputProps={{
                          startAdornment: (
                            <Box
                              sx={{
                                mr: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <PersonOutlineIcon
                                sx={{ fontSize: 20, color: "#666" }}
                              />
                            </Box>
                          ),
                          sx: { borderRadius: "8px" },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            height: "45px",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              {/* Address Details */}
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#000080", mt: 2, mb: 1 }}
              >
                Address Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Address Line 1 (Premises)"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    error={!!errors.addressLine1}
                    helperText={errors.addressLine1}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., Flat No, Building Name"
                    inputProps={{ maxLength: 60, minLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <HomeIcon sx={{ fontSize: 20, color: "#666" }} />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Address Line 2 (Locality)"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    error={!!errors.addressLine2}
                    helperText={errors.addressLine2}
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., Street, Area"
                    inputProps={{ maxLength: 60, minLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 20, color: "#666" }}
                          />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    label="Village/Town/City"
                    name="addressLine3"
                    value={formData.addressLine3}
                    onChange={handleChange}
                    error={!!errors.addressLine3}
                    helperText={errors.addressLine3}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., XXXX (4 chars)"
                    inputProps={{ maxLength: 4, minLength: 4 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 20, color: "#666" }}
                          />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    label="Sub-District"
                    name="addressLine4"
                    value={formData.addressLine4}
                    onChange={handleChange}
                    error={!!errors.addressLine4}
                    helperText={errors.addressLine4}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., XXX (3 chars)"
                    inputProps={{ maxLength: 3, minLength: 3 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 20, color: "#666" }}
                          />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    label="District"
                    name="addressLine5"
                    value={formData.addressLine5}
                    onChange={handleChange}
                    error={!!errors.addressLine5}
                    helperText={errors.addressLine5}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., XX (2 chars)"
                    inputProps={{ maxLength: 2, minLength: 2 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 20, color: "#666" }}
                          />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    label="State"
                    name="addressLine6"
                    value={formData.addressLine6}
                    onChange={handleChange}
                    error={!!errors.addressLine6}
                    helperText={errors.addressLine6}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., XX (2 chars)"
                    inputProps={{ maxLength: 2, minLength: 2 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 20, color: "#666" }}
                          />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    label="PIN"
                    name="pin"
                    type="number"
                    value={formData.pin}
                    onChange={handleChange}
                    error={!!errors.pin}
                    helperText={errors.pin}
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="e.g., 123456"
                    inputProps={{ maxLength: 6 }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{ mr: 1, display: "flex", alignItems: "center" }}
                        >
                          <PushPinIcon sx={{ fontSize: 20, color: "#666" }} />
                        </Box>
                      ),
                      sx: { borderRadius: "8px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                      },
                    }}
                  />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box
                sx={{
                  gridColumn: { xs: "1", sm: "1 / -1" },
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff9933",
                    "&:hover": {
                      backgroundColor: "#e68a00",
                    },
                    borderRadius: "8px",
                    padding: "0.75rem 2rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    width: "50%",
                    maxWidth: "250px",
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Snackbar for messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
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
    </LocalizationProvider>
  );
};

export default CreateUser;
