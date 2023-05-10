import React from "react";
import { ReactComponent as Toggle } from "../../icons/toggle.svg";
import { ReactComponent as LogoIcon } from "../../icons/logo.svg";
import Nav from "./Nav";
import style from "../../style/Header.module.scss";

const ToggleButton = () => {
  return (
    <>
      <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
      <label htmlFor="navbar-toggle" className={style.burger}>
        <Toggle className={`${style.toggle} cursor-point`} />
      </label>
    </>
  );
};
const Logo = () => {
  return (
    <a className={style.logo} href="#">
      <LogoIcon className="icon-logo cursor-point" />
    </a>
  );
};

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.headerContainer} mx-auto`}>
        <ToggleButton />
        <Nav />
        <Logo />
      </div>
    </header>
  );
};
export default Header;
