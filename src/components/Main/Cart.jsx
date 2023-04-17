import React from "react";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import style from "../../style/Cart.module.css";
const initialProducts = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

const Product = ({ products }) => {
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
                <Minus className={`${style.action} minus`} />
                <span className={style.count}>{quantity}</span>
                <Plus className={`${style.action} plus`} />
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
  return (
    <section className={`${style.container} col col-lg-5 col-sm-12`}>
      <h3 className={style.title}>購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Product products={initialProducts} />
      </section>
      <CartInfo className="shipping" title="運費" price={0} />
      <CartInfo className="total" title="小計" price={500} />
    </section>
  );
};
export default Cart;
