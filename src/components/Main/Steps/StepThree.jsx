import React from "react";
import style from "../../../style/StepsAll.module.scss";

const InputGroup = ({ label, type, placeholder, className }) => {
  return (
    <div className={`${style.inputGroup} ${className}`}>
      <div className={style.label}>{label}</div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
const StepThree = () => {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className={`${style.col} col col-12`}>
          <InputGroup
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            className="input-w-lg-4 input-w-sm-full"
          />
        </div>
        <div className={`${style.col} col col-12`}>
          <InputGroup
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            className="input-w-lg-4 input-w-sm-full"
          />
        </div>
        <div className={`${style.col} col col-12`}>
          <InputGroup
            label="有效期限"
            type="text"
            placeholder="MM/YY"
            className="input-w-lg-3 input-w-sm-full"
          />
          <InputGroup
            label="CVC / CCV"
            type="text"
            placeholder="123"
            className="input-w-lg-3 input-w-sm-s3"
          />
        </div>
      </section>
    </form>
  );
};
export default StepThree;
