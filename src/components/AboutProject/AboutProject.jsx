import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  
  return (
    <section className={'about-project'} id={'me'}>
      <div className={'about-project__content'}>
        <h2 className={'about-project__header'}>{'Виртуальная лаборатория'}</h2>
        <h3 className={'about-project__title'}>{'Открывайте науку с помощью практических экспериментов!'}</h3>
        <p className={'about-project__subtitle'}>{'Наша цель: создать веб-приложение для выполнения лабораторных работ и поднять интерес учеников к естественным наукам.'}</p>
        <div className={'about-project__more'}>
          <p className={'about-project__more-title'}>{'Преимущества:'}</p>
          <ul className={'about-project__list'}>
            <li className={'about-project__item'}>{'Практическое обучение: испытайте острые ощущения от практических экспериментов, способствующих более глубокому пониманию естественных наук.'}</li>
            <li className={'about-project__item'}>{'Улучшите свои оценки: улучшите свою успеваемость в классе, применяя свои знания на практике.'}</li>
            <li className={'about-project__item'}>{'Весело и увлекательно: откройте для себя интерес к науке в веселой и интерактивной форме.'}</li>
            <li className={'about-project__item'}>{'Управляемое обучение: пошаговые руководства и ресурсы, которые помогут вам добиться успеха в экспериментах.'}</li>
            <li className={'about-project__item'}>{'Доступ в любое время и в любом месте. Наша платформа доступна онлайн, что позволяет вам учиться в удобном для вас темпе.'}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;