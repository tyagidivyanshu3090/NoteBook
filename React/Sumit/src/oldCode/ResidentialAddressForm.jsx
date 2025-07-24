//* Working code for the residential data

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   Button,
//   FormHelperText,
//   CardContent,
//   Snackbar,
//   Alert, // Import Alert for the themed snackbar
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useStateContext } from "../../context/StateContext";

// // Import Material-UI Icons for the theme
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PushPinIcon from "@mui/icons-material/PushPin";
// import MapIcon from "@mui/icons-material/Map";
// import GpsFixedIcon from "@mui/icons-material/GpsFixed";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

// // --- IMPORT THE CENTRALIZED MOCK DATA ---
// import {
//   districts,
//   subDistricts,
//   towns as allTownsData,
// } from "../mockData/mockDataResidentialForm"; // Ensure this path is correct

// const ResidentialAddressForm = ({ handleNext, handleFormDataChange }) => {
//   const { username } = useSelector((state) => state.jwtAuthentication);
//   const { globalState } = useStateContext();
//   const { id: stateId, name: stateName } = globalState || {};

//   const [address, setAddress] = useState({
//     seAddressId: "",
//     state: "",
//     district: "",
//     subDistrict: "",
//     town: "",
//     wardCode: "",
//     locality: "",
//     mobile: "",
//     pincode: "",
//     latitude: "",
//     longitude: "",
//   });

//   const [districtsList, setDistrictsList] = useState([]);
//   const [subDistrictsList, setSubDistrictsList] = useState([]);
//   const [townsList, setTownsList] = useState([]);
//   const [selectedTownType, setSelectedTownType] = useState("");

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   // --- useEffect to initialize form state from context ---
//   useEffect(() => {
//     if (username) {
//       setAddress((prev) => ({ ...prev, mobile: username }));
//     }
//     if (stateId) {
//       setAddress((prev) => ({ ...prev, state: stateId }));
//     }
//   }, [username, stateId]);

//   // --- useEffect hooks for cascading data filtering ---

//   // 1. Filter Districts when stateId from context is available
//   useEffect(() => {
//     if (!stateId) {
//       setDistrictsList([]);
//       return;
//     }
//     const filteredDistricts = districts.filter((d) => d.stateCode === stateId);
//     setDistrictsList(filteredDistricts);
//     setAddress((prev) => ({
//       ...prev,
//       district: "",
//       subDistrict: "",
//       town: "",
//     }));
//   }, [stateId]);

//   // 2. Filter Sub-Districts when a district is selected
//   useEffect(() => {
//     const districtId = address.district;
//     if (!districtId) {
//       setSubDistrictsList([]);
//       return;
//     }
//     const filteredSubDistricts = subDistricts.filter(
//       (sd) => sd.districtId === districtId
//     );
//     setSubDistrictsList(filteredSubDistricts);
//     setAddress((prev) => ({ ...prev, subDistrict: "", town: "" }));
//   }, [address.district]);

//   // 3. Filter Towns/Villages when a sub-district is selected
//   useEffect(() => {
//     const subDistrictId = address.subDistrict;
//     if (!subDistrictId) {
//       setTownsList([]);
//       return;
//     }
//     const filteredTowns = allTownsData.filter(
//       (t) => t.subDistrictId === subDistrictId
//     );
//     setTownsList(filteredTowns);
//     setAddress((prev) => ({ ...prev, town: "" }));
//   }, [address.subDistrict]);

//   const validate = () => {
//     const newErrors = {};
//     if (!address.district) newErrors.district = "District is required.";
//     if (!address.subDistrict)
//       newErrors.subDistrict = "Subdistrict is required.";
//     if (!address.town) newErrors.town = "Town/Village is required.";
//     if (selectedTownType === "Town" && !address.wardCode) {
//       newErrors.wardCode = "Ward Code is required for a Town.";
//     }
//     if (!address.locality) {
//       newErrors.locality = "Locality is required.";
//     }
//     const pincodeRegex = /^\d{6}$/; // Standard 6-digit Indian Pincode
//     if (!address.pincode || !pincodeRegex.test(address.pincode)) {
//       newErrors.pincode = "A valid 6-digit Pincode is required.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));

//     if (name === "town") {
//       const selectedTown = townsList.find((t) => t.id === value);
//       setSelectedTownType(selectedTown?.type || "");
//       if (selectedTown?.type === "Village") {
//         setAddress((prev) => ({ ...prev, wardCode: "" }));
//       }
//     }
//   };

//   const showSnackbar = (message, severity = "success") => {
//     setSnackbar({ open: true, message, severity });
//   };

//   const handleSaveAndNext = (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       showSnackbar("Please fill all required fields correctly.", "error");
//       return;
//     }
//     // Mock successful submission for demonstration
//     console.log("Form Submitted:", address);
//     showSnackbar("Location saved successfully!", "success");
//     handleNext();
//   };

//   const isSaveDisabled =
//     !address.district ||
//     !address.subDistrict ||
//     !address.town ||
//     !address.locality ||
//     !/^\d{6}$/.test(address.pincode) ||
//     (selectedTownType === "Town" && !address.wardCode);

//   // Common styles for themed input fields
//   const themedFieldProps = {
//     InputProps: {
//       sx: { borderRadius: "8px", height: "45px" },
//     },
//     sx: {
//       "& .MuiOutlinedInput-root": {
//         borderRadius: "8px",
//         height: "45px",
//       },
//     },
//   };

//   const themedSelectSx = {
//     height: "45px",
//     borderRadius: "8px",
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSaveAndNext}
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         p: "20px",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* <Card
//         sx={{
//           borderRadius: 2,
//           boxShadow: 3,
//           maxWidth: "900px",
//           width: "100%",
//           p: "20px",
//           overflowY: "auto",
//         }}
//       > */}
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             color: "#000080",
//             fontWeight: 600,
//             mb: 3,
//           }}
//         >
//           Location Details
//         </Typography>

//         <Grid container spacing={2} sx={{ mb: 2 }}>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small" // Use size="small" for consistent height
//               label="State"
//               value={stateName || "Loading..."}
//               sx={{ width: "225px" }}
//               disabled
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <MapIcon sx={{ fontSize: 20, color: "#666" }} />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth size="small" sx={{ mb: 2, width: "225px" }}>
//               {" "}
//               {/* Use size="small" here too */}
//               <InputLabel id="district-label">District*</InputLabel>
//               <Select
//                 labelId="district-label"
//                 name="district"
//                 value={address.district}
//                 onChange={handleChange}
//                 label="District*" // This is crucial for the label to work correctly
//                 disabled={!stateId}
//                 required
//               >
//                 <MenuItem value="" disabled>
//                   <em>Select District</em>
//                 </MenuItem>
//                 {districtsList.map((district) => (
//                   <MenuItem key={district.id} value={district.id}>
//                     {district.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText>{errors.district}</FormHelperText>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth size="small" sx={{ mb: 1, width: "225px" }}>
//               <InputLabel id="subdistrict-label">Subdistrict*</InputLabel>
//               <Select
//                 labelId="subdistrict-label"
//                 name="subDistrict"
//                 value={address.subDistrict}
//                 onChange={handleChange}
//                 label="Subdistrict*"
//                 disabled={!address.district}
//                 required
//               >
//                 <MenuItem value="" disabled>
//                   <em>Select Subdistrict</em>
//                 </MenuItem>
//                 {subDistrictsList.map((sub) => (
//                   <MenuItem key={sub.id} value={sub.id}>
//                     {sub.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText>{errors.subDistrict}</FormHelperText>
//             </FormControl>
//           </Grid>
//         </Grid>

//         {/* --- Row 2: Town/Village, Locality, Ward Code --- */}
//         <Grid container spacing={2} sx={{ mb: 2 }}>
//           <Grid item xs={12} sm={4}>
//             <FormControl fullWidth size="small" sx={{ mb: 1, width: "225px" }}>
//               <InputLabel id="town-label">Town/Village*</InputLabel>
//               <Select
//                 labelId="town-label"
//                 name="town"
//                 value={address.town}
//                 onChange={handleChange}
//                 label="Town/Village*"
//                 disabled={!address.subDistrict}
//                 required
//               >
//                 <MenuItem value="" disabled>
//                   <em>Select Town/Village</em>
//                 </MenuItem>
//                 {townsList.map((town) => (
//                   <MenuItem key={town.id} value={town.id}>
//                     {town.name} ({town.type})
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText>{errors.town}</FormHelperText>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small"
//               sx={{ width: "225px" }}
//               label="Locality / Street Name*"
//               name="locality"
//               value={address.locality}
//               onChange={handleChange}
//               required
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <LocationOnIcon sx={{ fontSize: 20, color: "#666" }} />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Ward Code"
//               sx={{ width: "225px" }}
//               name="wardCode"
//               value={address.wardCode}
//               onChange={handleChange}
//               helperText="Required only if location is a Town"
//               disabled={selectedTownType !== "Town"}
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <ConfirmationNumberIcon
//                       sx={{ fontSize: 20, color: "#666" }}
//                     />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* --- Row 3: Pincode, Latitude, Longitude --- */}
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Pincode*"
//               sx={{ width: "225px" }}
//               name="pincode"
//               value={address.pincode}
//               onChange={handleChange}
//               required
//               inputProps={{ maxLength: 6 }}
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <PushPinIcon sx={{ fontSize: 20, color: "#666" }} />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Latitude"
//               sx={{ width: "225px" }}
//               name="latitude"
//               value={address.latitude}
//               disabled
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <GpsFixedIcon sx={{ fontSize: 20, color: "#666" }} />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <TextField
//               fullWidth
//               size="small"
//               label="Longitude"
//               name="longitude"
//               sx={{ width: "225px" }}
//               value={address.longitude}
//               disabled
//               InputProps={{
//                 startAdornment: (
//                   <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
//                     <GpsFixedIcon sx={{ fontSize: 20, color: "#666" }} />
//                   </Box>
//                 ),
//               }}
//             />
//           </Grid>
//         </Grid>

//         <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
//           <Button
//             type="submit"
//             variant="contained"
//             onClick={handleSaveAndNext}
//             disabled={isSaveDisabled}
//             sx={{
//               backgroundColor: "#ff9933",
//               "&:hover": {
//                 backgroundColor: "#e68a00",
//               },
//               borderRadius: "8px",
//               padding: "0.75rem 2rem",
//               fontWeight: "bold",
//               textTransform: "none",
//             }}
//           >
//             Save & Next
//           </Button>
//         </Box>
//       </CardContent>
//       {/* </Card> */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//           severity={snackbar.severity}
//           sx={{ width: "100%" }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ResidentialAddressForm;
