import Calculator from "awesome-react-calculator";

const style = {
  height: "100%",
  width: "100%",
};

const CalculatorComponent = () => {
  function handleInput(input) {}

  function onResultChange(newResult) {}
  return (
    <Calculator onNewInput={handleInput} onResultChange={onResultChange} />
  );
};

export default CalculatorComponent;
