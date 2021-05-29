import styled from "styled-components";

const activeColor = "rgb(95, 9, 255)";
const disabledColor = "rgba(219, 214, 214, 0.973)";

export const ProgressBarStep = styled.div`
  position: relative;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) =>
    props.isCompleted || props.isCurrent ? activeColor : disabledColor};
  font-weight: bold;
  transition: 0.5s;

  &:last-child {
    width: auto;
  }

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 5px solid
      ${(props) =>
        props.isCompleted || props.isCurrent ? activeColor : disabledColor};
    border-radius: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 30px;
    left: 2%;
    cursor: pointer;
    transition: 0.5s;
  }

  &:not(:last-child)::after {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    background-color: ${(props) =>
      props.isCompleted ? activeColor : disabledColor};
    top: 38px;
    left: 20px;
    z-index: -1;
    transition: 0.5s;
  }
`;
