import React from 'react';
import { AboutUsLine1 } from './lenyaComponents/AboutUsLine1/AboutUsLine1'
import { Experiments } from './lenyaComponents/Experiments/Experiments';
import { LinkResources } from './sashaComponents/LinkResources';
import { ContactForm } from './sashaComponents/ContactForm';
import { Feeds } from './lenyaComponents/Feeds/Feeds';
import { WhyBest } from './lenyaComponents/WhyBest/WhyBest';

const AboutUs = () => {
  return (
    <div>
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
    </div>
  );
};

export default AboutUs;