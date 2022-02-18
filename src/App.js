import CustomizeDiv from "./components/customize_div";
import higherOrderComponent from "./components/customize_div/HOC";

const App = () => {
  const SimpleHOC = higherOrderComponent(CustomizeDiv);
  return <SimpleHOC />;
};

export default App;
