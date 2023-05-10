import React from "react";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import style from "../../style/ProgressControl.module.scss";
const NextButton = ({ onStepClick }) => {
  return (
    <button className="next cursor-point" onClick={() => onStepClick("next")}>
      下一步
      <RightArrow />
    </button>
  );
};

const PrevButton = ({ onStepClick }) => {
  return (
    <button
      className={`${style.prev} cursor-point`}
      onClick={() => onStepClick("prev")}
    >
      <LeftArrow />
      上一步
    </button>
  );
};
const ConfirmButton = ({ onSubmit }) => {
  return (
    <button className="next cursor-point" onClick={onSubmit}>
      確認訂單
    </button>
  );
};

const Section = ({ children, phase }) => {
  return (
    <section className="button-group col col-12" data-phase={phase}>
      {children}
    </section>
  );
};

const ProgressControl = ({ onStepClick, onSubmit }) => {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <Section phase="address">
        <NextButton onStepClick={onStepClick} />
      </Section>
      <Section phase="shipping">
        <PrevButton onStepClick={onStepClick} />
        <NextButton onStepClick={onStepClick} />
      </Section>
      <Section phase="credit-card">
        <PrevButton onStepClick={onStepClick} />
        <ConfirmButton onSubmit={onSubmit} />
      </Section>
    </section>
  );
};
export default ProgressControl;
