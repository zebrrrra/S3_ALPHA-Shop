import React from "react";
import { ReactComponent as IconComplete } from "../../icons/StepProgress.svg";
import style from "../../style/StepProgress.module.css";

const Progress = ({ phase, step, title }) => {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{step}</span>
          <IconComplete className="icon cursor-point" />
        </span>
        <span className="progress-label">{title}</span>
      </span>
      {step !== 3 && <span className="progress-bar" data-order={step}></span>}
    </>
  );
};
const StepProgress = () => {
  return (
    <section className={`${style.container} col col-12`}>
      <Progress phase="address" step={1} title="寄送地址" />
      <Progress phase="shipping" step={2} title="運送方式" />
      <Progress phase="credit-card" step={3} title="付款資訊" />
    </section>
  );
};

export default StepProgress;
