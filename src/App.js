import { useState } from "react";
import Main from "./components/Main/Main";
import "./style/base.scss";
import "./style/reset.scss";
import "./style/formControl.scss";
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shipPrice, setShipPrice] = useState(0);
  const handleChange = (price) => {
    setShipPrice(price);
  };
  const handleClick = (e) => {
    const isNext = e === "next";
    const isPrev = e === "prev";
    if (isNext && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (isPrev && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = () => console.log("form is submitted");
  return (
    <Main
      currentStep={currentStep}
      handleClick={handleClick}
      handleSubmit={handleSubmit}
      shipPrice={shipPrice}
      handleChange={handleChange}
    ></Main>
  );
}

export default App;
