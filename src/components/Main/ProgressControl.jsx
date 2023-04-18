import React from "react";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import style from "../../style/ProgressControl.module.css";
const NextButton = ({ handleClick }) => {
  return (
    <button className="next" onClick={handleClick}>
      下一步
      <RightArrow className="cursor-point" />
    </button>
  );
};

const PrevButton = ({ handleClick }) => {
  return (
    <button className={style.prev} onClick={handleClick}>
      <LeftArrow className="cursor-point" />
      上一步
    </button>
  );
};
const ConfirmButton = ({ handleSubmit }) => {
  return (
    <button className="next" onClick={handleSubmit}>
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

const ProgressControl = ({ handleClick, handleSubmit }) => {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <Section phase="address">
        <NextButton handleClick={() => handleClick("next")} />
      </Section>
      <Section phase="shipping">
        <PrevButton handleClick={() => handleClick("prev")} />
        <NextButton handleClick={() => handleClick("next")} />
      </Section>
      <Section phase="credit-card">
        <PrevButton handleClick={() => handleClick("prev")} />
        <ConfirmButton handleSubmit={handleSubmit} />
      </Section>
    </section>
  );
};
export default ProgressControl;
