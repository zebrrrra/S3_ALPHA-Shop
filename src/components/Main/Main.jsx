import React, { useState } from "react";
import StepProgress from "./StepProgress";
import ProgressControl from "./ProgressControl";
import RegisterForm from "./Steps/StepAll";
import Cart from "./Cart";
import style from "../../style/Main.module.scss";
import { initialProducts } from "../../context/CartContext";
import { CartContext } from "../../context/CartContext";
import { FormProvider, useFormContext } from "../../context/FormContext";

const Register = () => {
  const { currentStep } = useFormContext();
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

  return (
    <main className={style.main}>
      <div className={style.container}>
        <FormProvider
          totalPrice={totalPrice}
          handleShipPriceChange={handleShipPriceChange}
        >
          <Register />
          <CartContext.Provider value={cartContextValue}>
            <Cart />
          </CartContext.Provider>
          <ProgressControl />
        </FormProvider>
      </div>
    </main>
  );
};

export default Main;
