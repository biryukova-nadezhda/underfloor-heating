import React from 'react';
import classNames from 'classnames';
import style from './Slider.module.css';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Slider= ({ children }) => {
  return (
    <Swiper
      modules={ [ Navigation, A11y, Autoplay ] }
      breakpoints={{
        550: {
          slidesPerView: 2,
        }
      }}
      autoplay={{
        delay: 2500,
      }}
      spaceBetween={ 10 }
      slidesPerView={ 1 }
      loop={ true }
      navigation={ {
        prevEl: '.btn_prev',
        nextEl: '.btn_next'
      } }
      style={ {
        height: '100%'
      } }
    >
      {
        children.map((slide, index) => <SwiperSlide key={ index }>{ slide }</SwiperSlide>)
      }

      <div className={ style.controls }>
        <button
          type="button"
          aria-label="Previous slide"
          className={ classNames('btn_prev', style.btn, style.btn_prev) }
        >
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className={ classNames('btn_next', style.btn, style.btn_next) }
        >
        </button>
      </div>
    </Swiper>
  );
};
