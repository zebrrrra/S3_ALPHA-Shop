import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useFormContext } from "../../../context/FormContext";
const RegisterForm = () => {
  const { currentStep } = useFormContext();
  return (
    <section className="form-container col col-12">
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </section>
  );
};
export default RegisterForm;
