import React from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import RegisterForm from "./Steps/StepAll";
import Cart from "./Cart";
import style from "../../style/Main.module.css";
const Register = () => {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <h2 className={`${style.title} col col-12`}>結帳</h2>
      <StepProgress />
      <RegisterForm />
    </section>
  );
};
const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
};

export default Main;
