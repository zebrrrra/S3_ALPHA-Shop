import React from "react";
import StepOne from "./StepOne";
// 為了展示作業不破版，先將StepTwo、StepThree註解起來，之後會加入useState控制step的呈現
// import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";
const RegisterForm = () => {
  return (
    <section className="form-container col col-12">
      <StepOne />
      {/* <StepTwo/> */}
      {/* <StepThree /> */}
    </section>
  );
};
export default RegisterForm;
