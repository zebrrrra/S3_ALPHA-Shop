import React from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import StepOne from "./Steps/StepOne"
import Cart from "./Cart";

const Register = () => {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <h2 className="register-title col col-12">結帳</h2>
      <StepProgress />
      <section className="form-container col col-12">
        <StepOne />
      </section>
    </section>
  );
};
const Main = () => {
  return (
    <main className="site-main">
      <div className="main-container">
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
};

export default Main;
