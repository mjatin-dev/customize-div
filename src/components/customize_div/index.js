import { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div(
  ({ windowWidth, windowHeight }) => `
    border: 2px solid;
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: ${windowWidth}px;
    height: ${windowHeight}px;
`
);

const Input = styled.input`
  border: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
`;

const CustomizeDiv = ({ divHeight }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(divHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(height);
  }, [height]);

  const updateHeight = (event) => {
    setHeight(`${event.target.value}${event.key}`);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <Div windowWidth={width} windowHeight={height}>
      <span>{`Window width = ${width}`}</span>

      <Input
        placeholder="set height"
        type="number"
        onKeyPress={(event) => updateHeight(event)}
      />
    </Div>
  );
};

export default CustomizeDiv;
