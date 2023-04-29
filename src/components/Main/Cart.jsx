import React, { useContext } from "react";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import style from "../../style/Cart.module.css";
import { CartContext } from "../Context/CartContext";

const Product = () => {
  const { products, handleQuantityClick } = useContext(CartContext);

  return (
    <>
      {products.map(({ id, img, price, name, quantity }) => (
        <div
          className="product-container col col-12"
          data-count={quantity}
          data-price={price}
          key={id}
        >
          <img className={style.img} src={img} alt={name} />
          <div className={style.info}>
            <div className={style.name}>{name}</div>
            <div className="control-container">
              <div className={style.control}>
                <Minus
                  className={`${style.action} minus`}
                  onClick={() => handleQuantityClick(id, "minus")}
                />
                <span className={style.count}>{quantity}</span>
                <Plus
                  className={`${style.action} plus`}
                  onClick={() => handleQuantityClick(id, "plus")}
                />
              </div>
            </div>
            <div className={style.price}>$ {price}</div>
          </div>
        </div>
      ))}
    </>
  );
};
const CartInfo = ({ className, title, price }) => {
  return (
    <section className={`cart-info ${className} col col-12`}>
      <div className={style.cartText}>{title}</div>
      <div className="cart-price">{price}</div>
    </section>
  );
};
const Cart = () => {
  const { shipPrice, totalPrice } = useContext(CartContext);

  return (
    <section className={`${style.container} col col-lg-5 col-sm-12`}>
      <h3 className={style.title}>購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Product />
      </section>
      <CartInfo className="shipping" title="運費" price={shipPrice} />
      <CartInfo className="total" title="小計" price={totalPrice} />
    </section>
  );
};
export default Cart;
