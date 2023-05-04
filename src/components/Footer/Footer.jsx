import React from "react";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Whatsapp } from "../../icons/whatsapp.svg";
import style from "../../style/Footer.module.scss";
const leftList = {
  title: "客戶服務",
  list: [
    { name: "運送說明", id: 1 },
    { name: "退換貨相關", id: 2 },
    { name: "付款資訊", id: 3 },
    { name: "FAQ", id: 4 },
  ],
};
const middleList = {
  title: "關於我們",
  list: [
    { name: "品牌故事", id: 1 },
    { name: "媒體聯繫", id: 2 },
    { name: "Press kit", id: 3 },
  ],
};
const rightList = {
  title: "資訊",
  list: [
    { name: "隱私權政策", id: 1 },
    { name: "Cookie", id: 2 },
    { name: "GDPR", id: 3 },
  ],
};

const FooterSection = ({ list }) => {
  return (
    <section class={style.section}>
      <h2 class={style.title}>{list.title}</h2>
      <div class={style.content}>
        {list.list.map(({ name, id }) => (
          <a class={style.link} href="#" key={id}>
            {name}
          </a>
        ))}
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.logo}>
          <Logo className="icon-logo" />
        </div>
        <FooterSection list={leftList} />
        <FooterSection list={middleList} />
        <FooterSection list={rightList} />
        <section className={style.section}>
          <h2 className={style.title}>追蹤 ALPHA Shop</h2>
          <div className={style.content}>
            <div className={style.tel}>+886 02123-45678</div>
            <div className="social-icon-group">
              <Facebook className={`${style.icon} cursor-point`} />
              <Instagram className={`${style.icon} cursor-point`} />
              <Whatsapp className={`${style.icon} cursor-point`} />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
