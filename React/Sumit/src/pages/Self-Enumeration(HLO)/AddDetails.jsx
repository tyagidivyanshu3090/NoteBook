import React, { useEffect, useState } from "react";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import your form components
import ResidentialAddressForm from "./ResidentialAddressForm";
import AssetsForm from "./AssetsForm";
import GeneralForm from "./GeneralForm";
import AmenitiesForm from "./AmenitiesForm";
import FormWrapper from "./FormWrapper";

// Import the new PreviewPage component
import PreviewPage from "./PreviewPage";

const AddDetails = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [steps, setSteps] = useState([]);

  // Updated formDataInitialState to match the keys used in child components
  const formDataInitialState = {
    locationDetails: {},
    generalDetails: {},
    amenitiesDetails: {},
    assetsDetails: {},
  };
  const [formData, setFormData] = useState(formDataInitialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { applicationTypeData } = useSelector(
    (state) => state.application || {}
  );

  useEffect(() => {
    const individualSteps = [
      "Location Details",
      "General form",
      "Amenities available to the household",
      "Assets possessed by the household",
    ];
    setSteps(individualSteps);
  }, [applicationTypeData]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      // Optional: Navigate back to a previous page if on the first step
      // navigate("/applicant/applicationform", { replace: true });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleFormDataChange = (stepKey, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: data,
    }));
  };

  // New handler to go from the preview page back to the last form step
  const handleBackToEdit = () => {
    setActiveStep(steps.length - 1);
  };

  // New handler for the final submission
  const handleConfirm = () => {
    console.log("FINAL SUBMISSION DATA:", formData);
    alert("Application has been confirmed and submitted!");
    // You can navigate to a success page after this
    // navigate('/thank-you');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        // Note: The first step doesn't have a handleBack prop
        return (
          <ResidentialAddressForm
            handleNext={handleNext}
            handleFormDataChange={handleFormDataChange}
          />
        );
      case 1:
        return (
          <GeneralForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleFormDataChange={handleFormDataChange}
          />
        );
      case 2:
        return (
          <AmenitiesForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleFormDataChange={handleFormDataChange}
          />
        );
      case 3:
        return (
          <AssetsForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleFormDataChange={handleFormDataChange}
          />
        );
      default:
        return <Typography variant="h6">Unknown step</Typography>;
    }
  };

  return (
    <>
      <FormWrapper wrapperWidth="100%" headingText="Self Enumeration Details">
        {!isLoading && steps.length > 0 ? (
          <Box sx={{ p: 2 }}>
            {/* CORE LOGIC: Show Stepper or Preview Page */}
            {activeStep === steps.length ? (
              <PreviewPage
                formData={formData}
                handleConfirm={handleConfirm}
                handleBackToEdit={handleBackToEdit}
              />
            ) : (
              <>
                <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                  {steps.map((label, index) => (
                    <Step key={index}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {renderStepContent(activeStep)}
              </>
            )}
          </Box>
        ) : (
          !isLoading && <Typography>Loading application form...</Typography>
        )}
      </FormWrapper>
    </>
  );
};

export default AddDetails;
