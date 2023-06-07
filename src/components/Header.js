import React from "react";
import headerLogoPath from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={headerLogoPath}
        alt="Логотип заголовка"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
