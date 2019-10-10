import React from "react";
import { Link } from "gatsby";

import "./Header.scss";

const Header = ({ pathname, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const blogPath = `${__PATH_PREFIX__}/blog/`;

  return (
    (pathname === rootPath || pathname === blogPath) && (
      <header className="header">
        <h1 className="header__logo">
          <Link to={pathname === blogPath ? `/blog/` : `/`}>{title}</Link>
        </h1>
        <ul className="header__menu">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/">Заметки</Link>
          </li>
          <li>
            <Link to="/">Советы</Link>
          </li>
          <li>
            <Link to="/">Жизнь</Link>
          </li>
          <li>
            <Link to="/">Обо мне</Link>
          </li>
        </ul>
      </header>
    )
  );
};

export default Header;
