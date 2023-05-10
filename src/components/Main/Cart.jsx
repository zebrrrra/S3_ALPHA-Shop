import React, { useState } from "react";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import style from "../../style/Cart.module.scss";
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

const Product = ({ products, onQuantityClick }) => {
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
                  onClick={() => onQuantityClick(id, "minus")}
                />
                <span className={style.count}>{quantity}</span>
                <Plus
                  className={`${style.action} plus`}
                  onClick={() => onQuantityClick(id, "plus")}
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
      <div className={style.text}>{title}</div>
      <div className={style.price}>{price}</div>
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
  const handleQuantityClick = (productId, buttonType) => {
    let newProducts = products.map((product) => {
      if (product.id === productId) {
        return updateProductQuantity(product, buttonType);
      }
      return product;
    });
    setProducts(newProducts);
  };
  const getTotalPrice = () => {
    if (shipPrice === "免費") {
      shipPrice = 0;
    }
    const totalPrice =
      products.reduce((sum, { price, quantity }) => sum + price * quantity, 0) +
      shipPrice;

    return totalPrice;
  };

  return (
    <section className={`${style.container} col col-lg-5 col-sm-12`}>
      <h3 className={style.title}>購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Product products={products} onQuantityClick={handleQuantityClick} />
      </section>
      <CartInfo className="shipping" title="運費" price={shipPrice} />
      <CartInfo className="total" title="小計" price={getTotalPrice()} />
    </section>
  );
};
export default Cart;
