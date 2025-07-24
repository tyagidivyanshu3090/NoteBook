import React, { useReducer, useEffect, useCallback } from "react";
import {
  Grid,
  InputLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Container,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  TextField,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
import {
  fieldStages,
  stepLabels,
  fields,
} from "../mockData/mockDataForHouseholdDetailsPage";
// --- CONFIGURATION ---

import SubmissionSummary from "./SubmissionSummary";
// Generates the initial empty state for all form values.
const getInitialFormValues = () => {
  const initialValues = {};
  fields.forEach((field) => {
    initialValues[field.id] = "";
  });
  return initialValues;
};

// --- VALIDATION LOGIC ---
const validateField = (fieldId, value) => {
  if (!value) {
    return "This field is required.";
  }
  if (fieldId === "nameOfHead") {
    // Regex allows letters, spaces, hyphens, apostrophes, and dots.
    if (!/^[A-Za-z\s.'-]+$/.test(value)) {
      return "Name can only contain letters and valid symbols ( .'- )";
    }
  }
  return ""; // No error
};

// --- STATE MANAGEMENT (REDUCER) ---

// Reducer function to manage all form state logic in one place.
const formReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_STATE":
      return {
        ...state,
        values: action.payload,
        saveStatus: "Loaded saved data.",
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
        errors: { ...state.errors, [action.payload.name]: "" }, // Clear error on change
      };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1, errors: {} };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1, errors: {} };
    case "GO_TO_STEP":
      return { ...state, currentStep: action.payload, errors: {} };
    case "SET_SUBMITTED":
      return { ...state, isSubmitted: action.payload };
    case "SET_SAVE_STATUS":
      return { ...state, saveStatus: action.payload, isSaving: false };
    case "SET_SAVING":
      return { ...state, isSaving: true };
    case "RESET_FORM":
      localStorage.removeItem("householdData");
      return {
        ...initialState,
        saveStatus: "Form has been reset.",
      };
    case "OPEN_CONFIRM_DIALOG":
      return { ...state, isConfirmDialogOpen: true };
    case "CLOSE_CONFIRM_DIALOG":
      return { ...state, isConfirmDialogOpen: false };
    default:
      return state;
  }
};

// The initial state object for the reducer.
const initialState = {
  values: getInitialFormValues(),
  errors: {},
  currentStep: 0,
  isSubmitted: false,
  saveStatus: "Fill the form to auto-save.",
  isSaving: false,
  isConfirmDialogOpen: false,
};


const ConfirmDialog = ({ open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={() => onClose(false)}>
    <DialogTitle>Confirm Action</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to clear all fields? This action cannot be undone.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onClose(false)}>Cancel</Button>
      <Button
        onClick={() => {
          onConfirm();
          onClose(false);
        }}
        color="error"
      >
        Reset
      </Button>
    </DialogActions>
  </Dialog>
);

/**
 * Renders the form action buttons (Next, Back, Submit, Reset) and save status.
 */
const FormActions = ({
  onNext,
  onBack,
  onReset,
  isFirstStep,
  isLastStep,
  state,
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 2,
    }}
  >
    <Box
      sx={{
        order: { xs: 3, sm: 1 },
        width: { xs: "100%", sm: "auto" },
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {state.isSaving ? (
        <CircularProgress size={20} />
      ) : (
        <SaveIcon fontSize="small" color="action" />
      )}
      <Typography variant="caption" color="text.secondary">
        {state.isSaving ? "Saving..." : state.saveStatus}
      </Typography>
    </Box>
    <Box
      sx={{
        order: 2,
        display: "flex",
        gap: 2,
        margin: { xs: "0 auto", sm: "0" },
      }}
    >
      <Button
        variant="contained"
        color="inherit"
        disabled={isFirstStep}
        onClick={onBack}
      >
        Back
      </Button>
      {isLastStep ? (
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={onNext}>
          Next
        </Button>
      )}
    </Box>
    <Box sx={{ order: { xs: 1, sm: 3 }, marginLeft: { sm: "auto" } }}>
      <Button variant="text" color="secondary" onClick={onReset}>
        Reset Form
      </Button>
    </Box>
  </Box>
);

// --- MAIN COMPONENT ---

const HouseholdDetailsPage = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("householdData");
      if (savedData) {
        dispatch({ type: "INITIALIZE_STATE", payload: JSON.parse(savedData) });
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
    }
  }, []);

  const saveData = useCallback(() => {
    if (Object.values(state.values).some((v) => v)) {
      dispatch({ type: "SET_SAVING" });
      setTimeout(() => {
        try {
          console.log("✅ Saving data:", state.values);
          localStorage.setItem("householdData", JSON.stringify(state.values));
          const time = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          dispatch({
            type: "SET_SAVE_STATUS",
            payload: `Last saved at ${time}`,
          });
        } catch (error) {
          console.error("Failed to save data to localStorage", error);
          dispatch({ type: "SET_SAVE_STATUS", payload: "Error saving data." });
        }
      }, 500);
    }
  }, [state.values]);

  useEffect(() => {
    const interval = setInterval(saveData, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, [saveData]);

  const handleNext = () => {
    const currentStepErrors = {};
    fieldStages[state.currentStep].forEach((key) => {
      const error = validateField(key, state.values[key]);
      if (error) {
        currentStepErrors[key] = error;
      }
    });

    if (Object.keys(currentStepErrors).length === 0) {
      dispatch({ type: "NEXT_STEP" });
      window.scrollTo(0, 0);
    } else {
      dispatch({ type: "SET_ERRORS", payload: currentStepErrors });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = {};
    fields.forEach((field) => {
      const error = validateField(field.id, state.values[field.id]);
      if (error) {
        allErrors[field.id] = error;
      }
    });

    if (Object.keys(allErrors).length === 0) {
      saveData();
      dispatch({ type: "SET_SUBMITTED", payload: true });
      localStorage.removeItem("householdData");
      window.scrollTo(0, 0);
      return;
    }

    let firstErrorStep = -1;
    for (let i = 0; i < fieldStages.length; i++) {
      const stageHasError = fieldStages[i].some(
        (fieldId) => allErrors[fieldId]
      );
      if (stageHasError) {
        firstErrorStep = i;
        break;
      }
    }

    // Show errors for the first invalid step
    const firstInvalidStepErrors = {};
    if (firstErrorStep !== -1) {
      fieldStages[firstErrorStep].forEach((fieldId) => {
        if (allErrors[fieldId]) {
          firstInvalidStepErrors[fieldId] = allErrors[fieldId];
        }
      });
      dispatch({ type: "SET_ERRORS", payload: firstInvalidStepErrors });

      if (firstErrorStep !== state.currentStep) {
        dispatch({ type: "GO_TO_STEP", payload: firstErrorStep });
      }
    }
  };

  const handleEdit = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const currentFields = fields.filter((f) =>
    fieldStages[state.currentStep].includes(f.id)
  );
  const isLastStep = state.currentStep === fieldStages.length - 1;
  const isFirstStep = state.currentStep === 0;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, boxShadow: 3 }}>
        {state.isSubmitted ? (
          <SubmissionSummary data={state.values} onEdit={handleEdit} />
        ) : (
          <>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Self Enumeration
              </Typography>
              <Typography variant="h6" component="h2" color="text.secondary">
                Household
              </Typography>
            </Box>

            <Stepper
              activeStep={state.currentStep}
              alternativeLabel
              sx={{ mb: 4 }}
            >
              {stepLabels.map((label, index) => (
                <Step key={label} completed={state.currentStep > index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={3}>
                {currentFields.map((field) => (
                  <Grid item key={field.id}>
                    <InputLabel
                      shrink={false}
                      htmlFor={field.id}
                      sx={{ mb: 1, minHeight: "2.5em" }}
                    >
                      <Typography
                        variant="body1"
                        component="span"
                        fontWeight="500"
                      >
                        {field.label}
                      </Typography>
                      <Typography color="error" component="span">
                        {" *"}
                      </Typography>
                    </InputLabel>

                    {field.type === "select" ? (
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={Boolean(state.errors[field.id])}
                      >
                        <Select
                          id={field.id}
                          name={field.id}
                          value={state.values[field.id]}
                          onChange={(e) =>
                            dispatch({
                              type: "INPUT_CHANGE",
                              payload: e.target,
                            })
                          }
                          displayEmpty
                          renderValue={(selected) => {
                            if (!selected) {
                              return (
                                <Typography color="text.secondary">
                                  Select an option...
                                </Typography>
                              );
                            }
                            const selectedOption = field.options.find(
                              ([val]) => val === selected
                            );
                            return (
                              <Typography noWrap>
                                {selectedOption ? selectedOption[1] : ""}
                              </Typography>
                            );
                          }}
                        >
                          <MenuItem value="">
                            <em style={{ color: "#888" }}>
                              -- Clear Selection --
                            </em>
                          </MenuItem>
                          {field.options.map(([val, text]) => (
                            <MenuItem key={val} value={val}>
                              {text}
                            </MenuItem>
                          ))}
                        </Select>
                        {state.errors[field.id] && (
                          <FormHelperText>
                            {state.errors[field.id]}
                          </FormHelperText>
                        )}
                      </FormControl>
                    ) : (
                      <TextField
                        id={field.id}
                        name={field.id}
                        value={state.values[field.id]}
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT_CHANGE",
                            payload: e.target,
                          })
                        }
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={Boolean(state.errors[field.id])}
                        helperText={state.errors[field.id]}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 4 }} />

              <FormActions
                onNext={handleNext}
                onBack={() => dispatch({ type: "PREV_STEP" })}
                onReset={() => dispatch({ type: "OPEN_CONFIRM_DIALOG" })}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                state={state}
              />
            </form>
          </>
        )}
      </Paper>

      <ConfirmDialog
        open={state.isConfirmDialogOpen}
        onClose={() => dispatch({ type: "CLOSE_CONFIRM_DIALOG" })}
        onConfirm={() => dispatch({ type: "RESET_FORM" })}
      />
    </Container>
  );
};

export default HouseholdDetailsPage;
