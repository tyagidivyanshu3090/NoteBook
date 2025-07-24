import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Helper function to generate numeric options
const generateNumericOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push([String(i), String(i)]);
  }
  return options;
};

// Field definitions remain the same
const generalFormFields = [
  { id: "nameOfHead", label: "Name of the Head", type: "text" },
  {
    id: "sex",
    label: "Sex",
    type: "select",
    options: [
      ["1", "Male"],
      ["2", "Female"],
      ["3", "Transgender person"],
    ],
  },
  {
    id: "socialCategory",
    label: "Social Category",
    type: "select",
    options: [
      ["1", "SC"],
      ["2", "ST"],
      ["3", "Other"],
    ],
  },
  {
    id: "houseOwnership",
    label: "Ownership status of this house",
    type: "select",
    options: [
      ["1", "Owned"],
      ["2", "Rented but has own house elsewhere"],
      ["3", "Rented and doesn’t own any house"],
      ["4", "Any other"],
    ],
  },
  {
    id: "dwellingRooms",
    label: "Number of dwelling rooms",
    type: "select",
    options: generateNumericOptions(1, 9),
  },
  {
    id: "marriedCouples",
    label: "No. of Married Couple(s)",
    type: "select",
    options: generateNumericOptions(1, 9),
  },
  {
    id: "memberInHouseHold",
    label: "Number of members in the household",
    type: "text",
  },
];

const GeneralForm = ({ handleNext, handleBack, handleFormDataChange }) => {
  const [formData, setFormData] = useState({});
  // Add validation state if needed
  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndNext = () => {
    // Optional: Add validation logic here before proceeding
    // if (!validate()) return;

    // Pass this step's data to the parent
    handleFormDataChange("generalDetails", formData);
    handleNext();
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        General Form
      </Typography>
      <Grid container direction="column" spacing={3}>
        {generalFormFields.map((field) => (
          <Grid item key={field.id}>
            {field.type === "text" ? (
              <TextField
                id={field.id}
                name={field.id}
                label={field.label}
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={formData[field.id] || ""}
              />
            ) : (
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
                    <MenuItem key={option[0]} value={option[0]}>
                      {option[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Grid>
        ))}
      </Grid>
      {/* UPDATED: Navigation buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleSaveAndNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default GeneralForm;
