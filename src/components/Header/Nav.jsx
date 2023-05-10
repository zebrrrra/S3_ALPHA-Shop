import React from "react";
import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Moon } from "../../icons/moon.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";
import { ReactComponent as Cart } from "../../icons/cart.svg";
import style from "../../style/Header.module.scss";
const menu = [
  { name: "男款", id: 1 },
  { name: "女款", id: 2 },
  { name: "最新消息", id: 3 },
  { name: "客製商品", id: 4 },
  { name: "聯絡我們", id: 5 },
];
const NavItem = ({ name }) => {
  return (
    <li className={style.item}>
      <a className={style.link} href="#">
        {name}
      </a>
    </li>
  );
};
const MenuList = () => {
  return (
    <ul className={`${style.list} ${style.menuList} mr-auto`}>
      {menu.map(({ name, id }) => (
        <NavItem key={id} name={name} />
      ))}
    </ul>
  );
};
const IconList = () => {
  return (
    <ul className={`${style.list} ${style.iconList}`}>
      <li className={style.item}>
        <Search className={`${style.icon} cursor-point`} />
      </li>
      <li className={style.item}>
        <Cart className={`${style.icon} cursor-point`} />
      </li>
      <li id="theme-toggle" className={style.item}>
        <Moon className={`${style.icon} cursor-point`} />
        <Sun className={`${style.icon} cursor-point`} />
      </li>
    </ul>
  );
};
const Nav = () => {
  return (
    <nav className="navbar-menu">
      <MenuList />
      <IconList />
    </nav>
  );
};
export default Nav;
