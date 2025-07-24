import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const amenitiesFormFields = [
  {
    id: "drinkingWaterSource",
    label: "Main source of drinking water",
    options: [
      { value: "1", label: "Tap water from treated source" },
      { value: "2", label: "Tap water from un-treated source" },
      { value: "3", label: "Well" },
    ],
  },
  {
    id: "drinkingWaterAvailability",
    label: "Availability of drinking water source",
    options: [
      { value: "1", label: "Within premises" },
      { value: "2", label: "Near the premises" },
      { value: "3", label: "Away" },
    ],
  },
  {
    id: "lightingSource",
    label: "Main source of lighting",
    options: [
      { value: "1", label: "Electricity" },
      { value: "2", label: "Kerosene" },
      { value: "3", label: "Solar" },
    ],
  },
  {
    id: "latrineAccess",
    label: "Access to latrine",
    options: [
      { value: "1", label: "Exclusively for household use only" },
      { value: "2", label: "Shared with other household" },
      { value: "3", label: "Public latrine" },
    ],
  },
  {
    id: "wasteWaterOutlet",
    label: "Waste water outlet",
    options: [
      { value: "1", label: "Closed drainage" },
      { value: "2", label: "Open drainage" },
      { value: "3", label: "No drainage" },
    ],
  },
  {
    id: "bathingFacility",
    label: "Bathing facility",
    options: [
      { value: "1", label: "Bathroom" },
      { value: "2", label: "Enclosure without roof" },
      { value: "3", label: "No" },
    ],
  },
  {
    id: "availabilityOfKitchen",
    label: "Kitchen facility",
    options: [
      { value: "1", label: "Cooking in kitchen has LPG/PNG Connection" },
      {
        value: "2",
        label: "Cooking in kitchen doesnot have LPG/PNG Connection",
      },
      {
        value: "3",
        label:
          "Cooking inside house, but not in kitchen has LPG/PNG Connection",
      },
      {
        value: "4",
        label:
          "Cooking inside house, but not in kitchen doesnot have LPG/PNG Connection",
      },
      {
        value: "5",
        label: "Cooking in open/outside house has LPG/PNG Connection",
      },
      {
        value: "6",
        label: "Cooking in open/outside house doesnot have LPG/PNG Connection",
      },
      {
        value: "7",
        label: "No Cooking",
      },
    ],
  },
  {
    id: "cookingFuel",
    label: "Main fuel for cooking",
    options: [
      { value: "1", label: "Firewood" },
      { value: "2", label: "LPG/PNG" },
      { value: "3", label: "Kerosene" },
    ],
  },
];

const AmenitiesForm = ({ handleNext, handleBack, handleFormDataChange }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndNext = () => {
    handleFormDataChange("amenitiesDetails", formData);
    handleNext();
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Amenities Available to the Household
      </Typography>

      {/* Vertically stacked fields */}
      <Grid container spacing={3} direction="column">
        {amenitiesFormFields.map((field) => (
          <Grid item xs={12} key={field.id}>
            <FormControl fullWidth>
              <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
              <Select
                labelId={`${field.id}-label`}
                id={field.id}
                name={field.id}
                label={field.label}
                onChange={handleChange}
                value={formData[field.id] || ""}
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleSaveAndNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default AmenitiesForm;
