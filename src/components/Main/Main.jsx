import React, { useState, useContext } from "react";
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
  const [creditCard, setCreditCard] = useState(creditCardInfo);

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

  const handleInputChange = (e) => {
    setCreditCard({ ...creditCard, [e.target.name]: e.target.value });
  };

  const handleConfirmClick = () => {
    const ticketInfo = { 總價: totalPrice, 信用卡資訊: creditCard };
    console.log(ticketInfo);
    setCreditCard({
      ...creditCard,
      cardNumber: "",
      cvc: "",
      date: "",
      name: "",
    });
  };
  // 收集與購物車相關資料放入Provider裡
  const cartContextValue = {
    products,
    updateProductQuantity,
    handleQuantityClick,
    shipPrice,
    totalPrice,
  };
  // 與表單相關資料
  const formContextValue = {
    currentStep,
    handleStepClick,
    handleShipPriceChange,
    creditCard,
    handleInputChange,
    handleConfirmClick,
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
