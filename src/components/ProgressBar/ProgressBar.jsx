import React, { useCallback, useEffect, useState } from "react";
import ProgressBarStep from "../ProgressBarStep";
import * as Styled from "./ProgressBar.styles";
import PropTypes from "prop-types"; // ES6

const ProgressBar = ({ stepsData }) => {
  const [completedStepCounter, setCompletedStepCounter] = useState(0);
  const [steps, setSteps] = useState(stepsData);

  useEffect(() => {
    setSteps(updateStepStatuses());
  }, [completedStepCounter]);

  const updateStepStatuses = useCallback(() => {
    return steps.map((step, idx) => ({
      ...step,
      isCurrent: completedStepCounter == idx,
      isCompleted: completedStepCounter > idx,
    }));
  }, [steps, completedStepCounter]);

  const changeStep = useCallback(
    (newStep) => {
      if (Math.abs(completedStepCounter - newStep) == 1) {
        setCompletedStepCounter(newStep);
      }
    },
    [completedStepCounter]
  );

  return (
    <Styled.ProgressBar>
      {steps.map((step, idx) => (
        <ProgressBarStep
          key={idx}
          step={step}
          onClick={() => changeStep(idx)}
        />
      ))}
    </Styled.ProgressBar>
  );
};

ProgressBar.propTypes = {
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isCurrent: PropTypes.bool.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProgressBar;
