import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
const RegisterForm = ({ currentStep, onChange }) => {
  return (
    <section className="form-container col col-12">
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo onChange={onChange} />}
      {currentStep === 3 && <StepThree />}
    </section>
  );
};
export default RegisterForm;
