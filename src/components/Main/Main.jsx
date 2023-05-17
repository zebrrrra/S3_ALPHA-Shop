import React, { useState, useRef, useContext } from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import RegisterForm from "./Steps/StepAll";
import Cart from "./Cart";
import style from "../../style/Main.module.scss";
import { initialProducts } from "../../context/CartContext";
import { CartContext } from "../../context/CartContext";
import { FormContext, creditCardInfo } from "../../context/FormContext";
const Register = () => {
  const { currentStep } = useContext(FormContext);
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase={currentStep}
      data-total-price="0"
    >
      <h2 className={`${style.title} col col-12`}>結帳</h2>
      <StepProgress />
      <RegisterForm />
    </section>
  );
};
const Main = () => {
  const [products, setProducts] = useState(initialProducts);
  const [shipPrice, setShipPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepClick = (e) => {
    const isNext = e === "next";
    const isPrev = e === "prev";
    if (isNext && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (isPrev && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleShipPriceChange = (price) => {
    setShipPrice(price);
  };

  const updateProductQuantity = (product, buttonType) => {
    let newQuantity = product.quantity;
    if (buttonType === "minus") {
      newQuantity = Math.max(product.quantity - 1, 0);
    } else if (buttonType === "plus") {
      newQuantity += 1;
    }
    return {
      ...product,
      quantity: newQuantity,
    };
  };

  const handleQuantityClick = (productId, buttonType) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) {
        return updateProductQuantity(product, buttonType);
      }
      return product;
    });
    setProducts(newProducts);
  };

  const totalPrice =
    products.reduce((sum, { price, quantity }) => sum + price * quantity, 0) +
    shipPrice;

  // 收集與購物車相關資料放入Provider裡
  const cartContextValue = {
    products,
    updateProductQuantity,
    handleQuantityClick,
    shipPrice,
    totalPrice,
  };

  const nameRef = useRef(null);
  const cardRef = useRef(null);
  const dateRef = useRef(null);
  const cvcRef = useRef(null);
  const refCollection = { nameRef, cardRef, dateRef, cvcRef };
  const handleClick = (e) => {
    e.preventDefault();
    creditCardInfo.name = nameRef.current.value;
    creditCardInfo.cardNumber = cardRef.current.value;
    creditCardInfo.date = dateRef.current.value;
    creditCardInfo.cvc = cvcRef.current.value;
    console.log(creditCardInfo);
    console.log(`總價是${totalPrice}`);
  };

  const formContextValue = {
    currentStep,
    handleStepClick,
    handleShipPriceChange,
    handleClick,
    refCollection,
  };
  return (
    <main className={style.main}>
      <div className={style.container}>
        <FormContext.Provider value={formContextValue}>
          <Register />
          <CartContext.Provider value={cartContextValue}>
            <Cart />
          </CartContext.Provider>
          <ProgressControl />
        </FormContext.Provider>
      </div>
    </main>
  );
};

export default Main;
