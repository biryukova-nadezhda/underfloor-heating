import React from 'react';
import classNames from 'classnames';
import style from './Section.module.css';
import { Container } from '../Container/Container';

export const Section = ({ children, classSection, classContainer, id }) => {
  return (
    <section
      className={ classNames(style.section, classSection) }
      id={ id ? id : ''}
    >
      <Container className={ classContainer }>
        { children }
      </Container>
    </section>
  );
};
