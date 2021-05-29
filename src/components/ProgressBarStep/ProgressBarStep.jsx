import React from "react";
import * as Styled from "./ProgressBarStep.styles";
import PropTypes from "prop-types"; // ES6

const ProgressBarStep = ({ step, onClick }) => {
  return (
    <Styled.ProgressBarStep
      isCompleted={step.isCompleted}
      isCurrent={step.isCurrent}
      onClick={onClick}
    >
      {step.label}
    </Styled.ProgressBarStep>
  );
};

ProgressBarStep.propTypes = {
  step: PropTypes.shape({
    label: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProgressBarStep;
