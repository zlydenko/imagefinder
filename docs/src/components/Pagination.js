import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

export default function Pagination(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.pagesCounter;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    props.goto(activeStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    props.goto(activeStep);
  };

  return (
    <MobileStepper
      steps={maxSteps}
      position="static"
      variant="text"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
