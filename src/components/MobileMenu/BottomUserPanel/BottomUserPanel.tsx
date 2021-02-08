import React from 'react';

import { NavLink } from "react-router-dom";

import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/ion/home-sharp';
import loveIcon from '@iconify-icons/whh/commentlove';
import basketIcon from '@iconify-icons/fa-solid/shopping-basket';
import userIcon from '@iconify-icons/fa-solid/user';
import percentIcon from '@iconify-icons/fa/percent';

import "./BottomUserPanel.sass";
 
const BottomUserPanel : React.FC = () => {
  return ( 
  <nav>
    <div className="bottom-user-panel__wrapper">
      <ul className="bottom-user-panel__container">
        <NavLink exact to="/" className="bottom-user-panel__item">
          <Icon icon={homeIcon} className="menu__icon"/>
        </NavLink>
        <NavLink to="/love" className="bottom-user-panel__item">
          <Icon icon={loveIcon} className="menu__icon"/>
        </NavLink>
        <NavLink to="/cart" className="bottom-user-panel__item" id="main__item">
          <Icon icon={basketIcon} className="menu__icon"/>
        </NavLink>
        <NavLink to="/profile" className="bottom-user-panel__item">
          <Icon icon={userIcon} className="menu__icon"/>
        </NavLink>
        <NavLink to="/discounts" className="bottom-user-panel__item">
          <Icon icon={percentIcon} className="menu__icon"/>
        </NavLink>
      </ul>
    </div>
  </nav> 
  );
}
 
export default BottomUserPanel ;