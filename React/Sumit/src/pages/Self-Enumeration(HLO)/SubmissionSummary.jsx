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
import {
  fieldStages,
  stepLabels,
  fields,
} from "../mockData/mockDataForHouseholdDetailsPage";

const SubmissionSummary = ({ data, onEdit }) => {
  const getOptionLabel = (fieldId, value) => {
    const field = fields.find((f) => f.id === fieldId);
    if (!value || !field) {
      return "N/A";
    }
    // Handle text input fields directly
    if (field.type === "text") {
      return value;
    }
    // Handle select fields
    const option = field.options?.find((o) => o[0] === value);
    return option ? option[1] : value;
  };

  return (
    <Box textAlign="center">
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Submission Successful
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 4 }}>
        Please review your details below.
      </Typography>
      <Grid container spacing={2} textAlign="left">
        {fields.map((field) => (
          <Grid item xs={12} key={field.id}>
            {" "}
            {/* MODIFIED: Removed sm={6} for vertical layout */}
            <Typography variant="caption" color="textSecondary">
              {field.label}
            </Typography>
            <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
              {getOptionLabel(field.id, data[field.id])}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={onEdit} sx={{ mt: 4 }}>
        Start New Form
      </Button>
    </Box>
  );
};

export default SubmissionSummary;
