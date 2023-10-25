import React from 'react';

import { LinkResources } from './sashaComponents/LinkResources';
import { ContactForm } from './sashaComponents/ContactForm';

import './AboutProject.css';
import { Experiments } from './lenyaComponents/Experiments/Experiments';
import { AboutUsLine1 } from './lenyaComponents/AboutUsLine1/AboutUsLine1';
import { Feeds } from './lenyaComponents/Feeds/Feeds';
import { WhyBest } from './lenyaComponents/WhyBest/WhyBest';

export const AboutProject = () => (
  <>
    <section className="default-section" id="me">
      <div className="about-project__content">
        <h2 className="about-project__header">Виртуальная лаборатория</h2>
        <h3 className="about-project__title">Открывайте науку с помощью практических экспериментов!</h3>
        <p className="about-project__subtitle">Наша цель: создать веб-приложение для выполнения лабораторных работ и поднять интерес учеников к естественным наукам.</p>
        <div className="about-project__more">
          <p className="about-project__more-title">Преимущества:</p>
          <ul className="about-project__list">
            <li className="about-project__item">Практическое обучение: испытайте острые ощущения от практических экспериментов, способствующих более глубокому пониманию естественных наук.</li>
            <li className="about-project__item">Улучшите свои оценки: улучшите свою успеваемость в классе, применяя свои знания на практике.</li>
            <li className="about-project__item">Весело и увлекательно: откройте для себя интерес к науке в веселой и интерактивной форме.</li>
            <li className="about-project__item">Управляемое обучение: пошаговые руководства и ресурсы, которые помогут вам добиться успеха в экспериментах.</li>
            <li className="about-project__item">Доступ в любое время и в любом месте. Наша платформа доступна онлайн, что позволяет вам учиться в удобном для вас темпе.</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="default-section" id="about">
      <h2 className="section-title">О нас</h2>
      <AboutUsLine1 />
    </section>
    <section className="default-section" id="expirements">
      <h2 className="section-title">Эксперименты</h2>
      <Experiments />
    </section>
    <section className="default-section" id="resources">
      <h2 className="section-title">Наши ресурсы</h2>
      <LinkResources />
    </section>
    <section className="default-section" id="advantages">
      <h2 className="section-title">Преимущества</h2>
      <WhyBest />
    </section>
    <section className="default-section" id="reviews">
      <h2 className="section-title">Отзывы</h2>
      <Feeds />
    </section>
    <section className="default-section section-fullfilled" id="feedback">
      <h2 className="section-title">Обратная связь</h2>
      <ContactForm />
    </section>
    </>
  );
