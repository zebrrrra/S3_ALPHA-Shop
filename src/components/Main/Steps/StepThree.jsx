import React from "react";

const InputGroup = ({ label, type, placeholder, className }) => {
  return (
    <div className={`input-group ${className}`}>
      <div className="input-label">{label}</div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
const StepThree = () => {
  return (
    <form class="col col-12" data-phase="credit-card">
      <h3 class="form-title">付款資訊</h3>
      <section class="form-body col col-12">
        <div class="col col-12">
          <InputGroup
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            className="input-w-lg-4 input-w-sm-full"
          />
        </div>
        <div class="col col-12">
          <InputGroup
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            className="input-w-lg-4 input-w-sm-full"
          />
        </div>
        <div class="col col-12">
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
