import React from 'react';
import style from './CalcTotalBlock.module.css';

export const CalcTotalBlock = ({ square, price }) => {
  return (
    <div className={ style.total }>
      { square !== 0 &&
        <div className={ style.resultWrapper }>
          <p className={ style.result }>
            <span className={ style.text }>Площадь</span>
            <span className={ style.resultText }>{ square }&nbsp;кв&nbsp;м</span>
          </p>

          <p className={ style.result }>
            <span className={ style.text }>Примерная&nbsp;стоимость</span>
            <span className={ style.resultText }>{ price }&nbsp;руб</span>
          </p>
        </div>
      }
    </div>
  );
};
