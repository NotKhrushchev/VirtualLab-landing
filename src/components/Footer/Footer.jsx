import React from 'react';
import './Footer.css';
import { resources_ru } from '../../translations/resources_ru';
import Link from '../ui/Link/Link';

export const Footer = ({ fillColor }) => (
  <footer className="footer" style={{ backgroundColor: fillColor }}>
    <div className='footer__content'>
      <h3 className='footer__title'>{resources_ru.stud_project}</h3>
      <div className='footer__info'>
        <a href="#" className='footer__rules'>Правила пользования сайтом</a>
        <div className='footer__info-year'>
          <ul className="menu">
            <li><a href="#about">О нас</a></li>
            <li><a href="#experirements">Эксперименты</a></li>
            <li><a href="#resources"> Ресурсы</a></li>
            <li><a href="#advantages">Преимущества</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#feedback">Обратная связь</a></li>
          </ul>
        </div>
        <ul className='footer__info-links'>
          <Link 
            addtlClass='footer__info-links-link' 
            wayTo='https://github.com/NotKhrushchev'
            title='Github'
          />
          <Link 
            addtlClass='footer__info-links-link' 
            wayTo='https://github.com/NotKhrushchev'
            title='VK'
          />
          <Link 
            addtlClass='footer__info-links-link' 
            wayTo='https://github.com/NotKhrushchev'
            title='Telegram'
          />
        </ul>
      </div>
    </div>
  </footer>
);