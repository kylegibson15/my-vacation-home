import React, { useState } from 'react';
import {
  Button,
  Container,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme
} from '@mui/material';

const getSteps = () => {
  return [
    'Windows & Doors',
    'Trash',
    'Dishes',
    'Lights',
    'Thermostat',
    'Beds/Linens',
    'Keys'
  ];
};

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Secure all doors and windows. When opening up windows, please make sure
              that you move the blinds or window treatments out of the way.`;
    case 1:
      return `Bag all trash and place it in the trash collection area. 
              The trash bins are located in the garage outside the door.`;
    case 2:
      return `Load and run the dishwasher. Dishwasher pods are in the cabinet under the sink.`;
    case 3:
      return 'Turn off all Lights.';
    case 4:
      return `Please make sure the the heat is left on 55 degrees`;
    case 5:
      return `Please strip the beds. Any unused linens/ towels should remain in place.
              Place all used towels on the tile floor.`;
    case 6:
      return `Return the lockbox key back to its place in the lockbox.`;
    default:
      return 'Unknown step';
  }
}

function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{ height: '100%' }}>
      <Container maxWidth="md">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography variant="body2">{getStepContent(index)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: theme.spacing(1) }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#457B9D' }}
                    onClick={handleNext}
                    size="small"
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ padding: theme.spacing(3) }}>
            <Typography variant="body2">
              All steps completed - you&apos;re ready to check out
            </Typography>
            <Button onClick={handleReset} variant="outlined" size="small">
              Reset
            </Button>
          </Paper>
        )}
      </Container>
    </div>
  );
}

export default CheckOut;
