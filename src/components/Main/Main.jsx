import React from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import RegisterForm from "./Steps/StepAll";
import Cart from "./Cart";
import style from "../../style/Main.module.scss";
const Register = ({ currentStep, onChange }) => {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={currentStep}
      data-total-price="0"
    >
      <h2 className={`${style.title} col col-12`}>結帳</h2>
      <StepProgress />
      <RegisterForm currentStep={currentStep} onChange={onChange} />
    </section>
  );
};
const Main = ({ currentStep, onStepClick, onSubmit, shipPrice, onChange }) => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Register currentStep={currentStep} onChange={onChange} />
        <Cart shipPrice={shipPrice} />
        <ProgressControl onStepClick={onStepClick} onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default Main;
