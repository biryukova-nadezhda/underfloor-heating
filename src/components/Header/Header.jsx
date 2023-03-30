import React from 'react';
import classNames from 'classnames';
import style from './Header.module.css';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';

export const Header = ({ logo }) => {
  return (
    <header className={ style.header }>
      <h1 className="visually-hidden">Теплый пол в каждый дом</h1>
      <Container className={ style.container }>
        <Logo src={ logo } alt="Логотип с солнышком сайта теплый пол" className={ style.logo } />
        <button type="button" className={ classNames('btn', 'jsOpenPopup', style.btn) }>Заказать</button>
      </Container>
    </header>
  );
};
