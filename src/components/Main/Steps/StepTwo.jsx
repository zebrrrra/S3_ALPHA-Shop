import React from "react";

const RadioGroup = ({ price, id, checked, name, period }) => {
  return (
    <label className="radio-group col col-12" data-price={price}>
      <input id={id} type="radio" name="shipping" checked={checked} />
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{name}</div>
          <div className="price"></div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
};
const StepTwo = () => {
  return (
    <form class="col col-12" data-phase="shipping">
      <h3 class="form-title">運送方式</h3>
      <section class="form-body col col-12">
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
