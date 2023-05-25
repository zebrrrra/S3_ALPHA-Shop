import React from "react";
import style from "../../../style/StepsAll.module.scss";
import { useFormContext } from "../../../context/FormContext";
const InputGroup = ({ name, value, label, type, placeholder, className }) => {
  const { handleInputChange } = useFormContext();
  return (
    <div className={`${style.inputGroup} ${className}`}>
      <div className={style.label}>{label}</div>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

const StepThree = () => {
  const { creditCard } = useFormContext();
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className={`${style.col} col col-12`}>
          <InputGroup
            name="name"
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            className="input-w-lg-4 input-w-sm-full"
            value={creditCard.name}
          />
        </div>
        <div className={`${style.col} col col-12`}>
          <InputGroup
            name="cardNumber"
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            className="input-w-lg-4 input-w-sm-full"
            value={creditCard.cardNumber}
          />
        </div>
        <div className={`${style.col} col col-12`}>
          <InputGroup
            name="date"
            label="有效期限"
            type="text"
            placeholder="MM/YY"
            className="input-w-lg-3 input-w-sm-full"
            value={creditCard.date}
          />
          <InputGroup
            name="cvc"
            label="CVC / CCV"
            type="text"
            placeholder="123"
            className="input-w-lg-3 input-w-sm-s3"
            value={creditCard.cvc}
          />
        </div>
      </section>
    </form>
  );
};

export default StepThree;
