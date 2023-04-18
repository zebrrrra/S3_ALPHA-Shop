import React from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import RegisterForm from "./Steps/StepAll";
import Cart from "./Cart";
import style from "../../style/Main.module.css";
const Register = ({ currentStep, handleChange }) => {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={currentStep}
      data-total-price="0"
    >
      <h2 className={`${style.title} col col-12`}>結帳</h2>
      <StepProgress />
      <RegisterForm currentStep={currentStep} handleChange={handleChange} />
    </section>
  );
};
const Main = ({
  currentStep,
  handleClick,
  handleSubmit,
  shipPrice,
  handleChange,
}) => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Register currentStep={currentStep} handleChange={handleChange} />
        <Cart shipPrice={shipPrice} />
        <ProgressControl
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default Main;
