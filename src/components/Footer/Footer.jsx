import React from 'react';
import './Footer.css';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/Link/Link';

const Footer = () => {
  
  return (
    <footer className={`footer`}>
      <div className={'footer__content'}>
        <h3 className={'footer__title'}>{resources_ru.stud_project}</h3>
        <div className={'footer__info'}>
          <p className={'footer__info-year'}>© 2023</p>
          <ul className={'footer__info-links'}>
            <Link 
              addtlClass={'footer__info-links-link'} 
              wayTo={'https://github.com/NotKhrushchev'}
              title={'Github'}
            />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;