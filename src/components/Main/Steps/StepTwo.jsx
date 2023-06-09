import React from "react";
import style from "../../../style/StepsAll.module.scss";

const RadioGroup = ({ price, id, checked, name, period }) => {
  return (
    <label
      className={`${style.radioGroup} ${style.col} col col-12`}
      data-price={price}
    >
      <input id={id} type="radio" name="shipping" checked={checked} />
      <div className={style.info}>
        <div className={`${style.col} col col-12`}>
          <div className={style.radioText}>{name}</div>
          <div className={style.price}></div>
        </div>
        <div className={`${style.period} ${style.col} col col-12`}>
          {period}
        </div>
      </div>
      <div className={style.radioBorder}></div>
    </label>
  );
};
const StepTwo = () => {
  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <RadioGroup
          price={0}
          id="shipping-standard"
          checked={true}
          name="標準運送"
          period="約 3~7 個工作天"
        />
        <RadioGroup
          price={500}
          id="shipping-dhl"
          checked={false}
          name="DHL 貨運"
          period="48 小時內送達"
        />
      </section>
    </form>
  );
};
export default StepTwo;
