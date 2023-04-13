import React from "react";
import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";
const NextButton = () => {
  return (
    <button className="next">
      下一步
      <RightArrow className="cursor-point" />
    </button>
  );
};

const PrevButton = () => {
  return (
    <button className="prev">
      <LeftArrow className="cursor-point" />
      上一步
    </button>
  );
};
const ConfirmButton = () => {
  return (
    <button className="next">
      確認訂單
      <RightArrow className="cursor-point" />
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
