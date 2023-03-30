import React from 'react';
import style from './Hero.module.css';
import classNames from 'classnames';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Slider } from '../Slider/Slider';
import { bgArray } from '../../assets/data/heroBgArray';

export const Hero = () => {
  return (
    <Section classSection={ style.hero } classContainer={ style.container }>
      <div className={ classNames("gray-block", style.content) }>
        <SectionTitle classTitle={ style.title } textTitle="Приносим тепло в&nbsp;каждый дом" />
        <p className={ style.description }>Устанавливаем теплые полы в&nbsp;квартирах, офисах и&nbsp;загородных домах.</p>
        <a href="#calc" className={ classNames("btn", "link", style.btn) }>Рассчитать&nbsp;стоимость</a>
      </div>
      <div className={ style.slider__block }>
        <Slider>
          {
            bgArray.map(bg => <div key={ bg.id } className={ style.slider__slide } style={ { backgroundImage: `url(${ bg.url })` } }></div>)
          }
        </Slider>
      </div>
    </Section>
  );
};
