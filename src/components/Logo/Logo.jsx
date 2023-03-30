import React from 'react';
import style from './Logo.module.css';
import classNames from 'classnames';

export const Logo = ({ src, alt, classLogo }) => {
  return (
    <>
      <img
        src={ src }
        alt={ alt }
        className={ classNames('img', style.logo, classLogo) }
      />
    </>
  )
}
