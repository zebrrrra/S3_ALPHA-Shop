import React, { useContext } from "react";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
import style from "../../style/ProgressControl.module.scss";
import { FormContext } from "../../context/FormContext";
const NextButton = () => {
  const { handleStepClick } = useContext(FormContext);

  return (
    <button
      className="next cursor-point"
      onClick={() => handleStepClick("next")}
    >
      下一步
      <RightArrow />
    </button>
  );
};

const PrevButton = () => {
  const { handleStepClick } = useContext(FormContext);
  return (
    <button
      className={`${style.prev} cursor-point`}
      onClick={() => handleStepClick("prev")}
    >
      <LeftArrow />
      上一步
    </button>
  );
};
const ConfirmButton = () => {
  const { handleClick } = useContext(FormContext);

  return (
    <button className="next cursor-point" onClick={handleClick}>
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

const ProgressControl = () => {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <Section phase="address">
        <NextButton />
      </Section>
      <Section phase="shipping">
        <PrevButton />
        <NextButton />
      </Section>
      <Section phase="credit-card">
        <PrevButton />
        <ConfirmButton />
      </Section>
    </section>
  );
};
export default ProgressControl;
