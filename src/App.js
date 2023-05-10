import { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./style/base.scss";
import "./style/reset.scss";
import "./style/stepControl.scss";
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shipPrice, setShipPrice] = useState("免費");
  const handleShipPriceChange = (price) => {
    setShipPrice(price);
  };
  const handleStepClick = (e) => {
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
    <>
      <Header />
      <Main
        currentStep={currentStep}
        onStepClick={handleStepClick}
        onSubmit={handleSubmit}
        shipPrice={shipPrice}
        onChange={handleShipPriceChange}
      />
      <Footer />
    </>
  );
}

export default App;
