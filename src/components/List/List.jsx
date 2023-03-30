import React from 'react';
import classNames from 'classnames';
import style from './List.module.css';

export const List = ({ children, nameList, classList}) => {
  return(
    <ul className={ classNames(style.list, nameList, classList)}>
      { children }
    </ul>
  )
}
