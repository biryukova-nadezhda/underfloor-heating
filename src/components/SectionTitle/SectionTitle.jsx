import React from 'react';
import classNames from 'classnames';
import style from './SectionTitle.module.css';

export const SectionTitle = ({ classTitle, textTitle }) => {
  return (
    <h2 className={ classNames(style.title, classTitle) }>
      { textTitle }
    </h2>
  );
};
