import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Button,
  Container,
  makeStyles,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@material-ui/core';

import { pageTransition, pageVariants } from '../../../constants';

import StepIcon from './StepIcon';

const useStyles = makeStyles((theme) => ({
  checkout: {
    width: '100vw',
    height: '100%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    'Windows & Doors',
    'Trash',
    'Dishes',
    'Lights',
    'Thermostat',
    'Beds/Linens',
    'Keys'
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Secure all doors and windows. When opening up windows, please make sure
              that you move the blinds or window treatments out of the way.`;
    case 1:
      return `Bag all trash and place it in the trash collection area. 
              The trash bins are located in the garage outside the door.`;
    case 2:
      return `Load and run the dishwasher.`;
    case 3:
      return 'Turn off all Lights.';
    case 4:
      return `Please make sure the the heat is left on 55 degrees`;
    case 5:
      return `Please strip the beds. Any unused linens/ towels should remain in place.
              Place all used towels on the tile floor.`;
    case 6:
      return `Return the lockbox key back to its place in the lockbox. 
              The 2 sets of keys that you found inside the condo need to be put back on the wooden counter area.`;
    default:
      return 'Unknown step';
  }
}

function CheckOut() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      style={{ height: '100%' }}
      transition={pageTransition}
      variants={pageVariants}
    >
      <Container className={classes.checkout}>
        {/* <Typography variant="h5" color="textPrimary">
          Checking Out
        </Typography> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              <StepContent>
                <Typography variant="body2">{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      size="small"
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      size="small"
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography variant="body2">
              All steps completed - you&apos;re ready to check out
            </Typography>
            <Button
              onClick={handleReset}
              className={classes.button}
              size="small"
            >
              Reset
            </Button>
          </Paper>
        )}
      </Container>
    </motion.div>
  );
}

export default CheckOut;
