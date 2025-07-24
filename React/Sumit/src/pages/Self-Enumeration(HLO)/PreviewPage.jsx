// Create this new file: ./components/PreviewPage.jsx

import React from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

// Helper component to display a single data entry
const DataRow = ({ label, value }) => (
  <Grid container item xs={12} sm={6} md={4} spacing={1} sx={{ mb: 1, alignItems: 'center' }}>
    <Grid item xs={5}>
      <Typography variant="body1" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
        {/* Adds space before capital letters for readability, e.g., "nameOfHead" -> "name Of Head" */}
        {label.replace(/([A-Z])/g, ' $1')}:
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        {value || "Not provided"}
      </Typography>
    </Grid>
  </Grid>
);

// Helper component to render a section of data
const DetailsSection = ({ title, data }) => {
  if (!data || Object.keys(data).length === 0) {
    return null; // Don't render if there's no data for this section
  }

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ color: '#000080' }}>
          {title}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          {Object.entries(data).map(([key, value]) => (
            <DataRow key={key} label={key} value={value} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const PreviewPage = ({ formData, handleConfirm, handleBackToEdit }) => {
  const { locationDetails, generalDetails, amenitiesDetails, assetsDetails } = formData;

  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, mt: 4, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 600, color: '#000080' }}>
        Application Preview
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 3 }}>
        Please review all the details below before confirming your application.
      </Typography>
      
      <DetailsSection title="Location Details" data={locationDetails} />
      <DetailsSection title="General Information" data={generalDetails} />
      <DetailsSection title="Amenities Details" data={amenitiesDetails} />
      <DetailsSection title="Assets Details" data={assetsDetails} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button 
          variant="outlined" 
          onClick={handleBackToEdit}
          sx={{ borderRadius: "8px", padding: "0.75rem 2rem" }}
        >
          Back to Edit
        </Button>
        <Button 
          variant="contained" 
          onClick={handleConfirm}
          sx={{ borderRadius: "8px", padding: "0.75rem 2rem", backgroundColor: "#ff9933", '&:hover': { backgroundColor: '#e68a00' } }}
        >
          Confirm & Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default PreviewPage;
