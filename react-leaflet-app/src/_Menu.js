import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <ul className="list pa3 pa5-ns">
      <li className="dib mr2">
        <a href="#" className="f4 f2-ns b db pa2 link dim mid-gray">
          Filter the Stores:
        </a>
      </li>
      <li className="dib mr2">
        <a href="#" className="f4 f2-ns b db pa2 link dim mid-gray">
          Geographic Filter
        </a>
      </li>
      <li className="dib mr2">
        <a href="#" className="f4 f2-ns b db pa2 link dim mid-gray">
          Reseller Type
        </a>
      </li>
      <li className="dib mr2">
        <a href="#" className="f4 f2-ns b db pa2 link dim mid-gray">
          Reset Filter
        </a>
      </li>
    </ul>
  );
};

export default Menu;
