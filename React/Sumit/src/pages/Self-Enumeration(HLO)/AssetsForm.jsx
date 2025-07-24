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

const assetsFormFields = [
  {
    id: "radio",
    label: "Radio/Transistor",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "television",
    label: "Television",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "internetAccess",
    label: "Access to internet",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "laptop",
    label: "Laptop/computer",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "phone",
    label: "Telephone/Mobile Phone",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "bikeScooter",
    label: "Bicycle/Scooter/Motorcycle",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "car",
    label: "Car/Jeep/Van",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
  {
    id: "cereal",
    label: "Main cereal consumed",
    options: [
      { value: "1", label: "Rice" },
      { value: "2", label: "Wheat" },
      { value: "3", label: "Other" },
    ],
  },
];

const AssetsForm = ({ handleNext, handleBack, handleFormDataChange }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndNext = () => {
    handleFormDataChange("assetsDetails", formData);
    handleNext();
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Assets Possessed by the Household
      </Typography>
      <Grid container direction="column" spacing={3}>
        {assetsFormFields.map((field) => (
          <Grid item key={field.id}>
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleSaveAndNext}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AssetsForm;
