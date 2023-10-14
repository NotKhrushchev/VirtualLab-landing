import React from 'react';
import './Header.css';
import { resources_ru } from '../../translations/resources_ru';
import NLink from '../ui/NLink/NLink';
import { useLocation } from 'react-router-dom';
import Logo from '../ui/Logo/Logo';
import Btn from '../ui/buttons/Btn';

const Header = ({ setSideBar }) => {

  const isMainPage = !useLocation().pathname.split('/').pop();

  const showSideBar = () => {
    /** Отключаю скролл страницы при открытии бокового меню */
    document.querySelector('body').style.overflow = 'hidden';
    
    setSideBar(true);
  };

  return (
    <header className={`header header_main`}>
      <div className={'header__content'}>
        <Logo addtlClass={'header__logo'} />
        <nav className='header__nav'>
          <NLink 
            addtlClass={'header__nav-link'} 
            wayTo={'/about-us'} 
            title={resources_ru.about_us} 
          />
          <NLink 
            addtlClass={'header__nav-link'} 
            wayTo={'/project'} 
            title={resources_ru.project} 
          />
        </nav>
        <Btn
          addtlClass={`header__burger-menu-icon ${isMainPage ? 'header__burger-menu-icon_bright' : 'header__burger-menu-icon_dark'} `}
          ariaLabel={resources_ru.burger_menu_icon}
          onClick={showSideBar}
        />
      </div>
    </header>
  );
};

export default Header;