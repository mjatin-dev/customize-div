import React from "react";

const higherOrderComponent = (WrappedComponent) => {
  let height = 200;
  return () => <WrappedComponent divHeight={height} />;
};

export default higherOrderComponent;
