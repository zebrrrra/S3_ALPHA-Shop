import React, { useState } from "react";
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

const Product = ({ products, handleClick }) => {
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
                  onClick={() => handleClick(id, "minus")}
                />
                <span className={style.count}>{quantity}</span>
                <Plus
                  className={`${style.action} plus`}
                  onClick={() => handleClick(id, "plus")}
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
const Cart = ({ shipPrice }) => {
  const [products, setProducts] = useState(initialProducts);
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
  const handleClick = (productId, buttonType) => {
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

  return (
    <section className={`${style.container} col col-lg-5 col-sm-12`}>
      <h3 className={style.title}>購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Product products={products} handleClick={handleClick} />
      </section>
      <CartInfo className="shipping" title="運費" price={shipPrice} />
      <CartInfo className="total" title="小計" price={totalPrice} />
    </section>
  );
};
export default Cart;
