import React from 'react';
import './BurgerMenu.css';
import { resources_ru } from '../../../translations/resources_ru';
import NLink from '../NLink/NLink';
import Btn from '../buttons/Btn';

const BurgerMenu = ({ sideBar, setSideBar, navItems }) => {

  const hideSideBar = () => {
    /** Возвращаю скролл страницы при закрытии бокового меню */
    document.querySelector('body').style.removeProperty('overflow');

    setSideBar(false);
  };

  return (
    <nav className={sideBar ? 'side-bar active' : 'side-bar'}>
      <div className={sideBar ? 'side-bar__blackout active' : ''} onClick={hideSideBar} />
      <div className={sideBar ? 'side-bar__menu active' : 'side-bar__menu'}>
        <Btn
          addtlClass={'side-bar__menu-cross'}
          onClick={hideSideBar}
          ariaLabel={resources_ru.cross_icon}
        />
        <ul className={'side-bar__menu-items'}>
          {navItems.map((item, index) => 
            <li className={'side-bar__menu-items-item'} key={index}>
              <NLink
                addtlClass={'side-bar__menu-items-item-link'} 
                wayTo={item.wayTo}
                title={item.title}
                onClick={hideSideBar} 
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default BurgerMenu;
