import React from 'react';
import classNames from 'classnames';
import style from './CalcForm.module.css';

export const CalcForm = ({ submitFunc, inputFunc, radioFunc, param, check, btnShow }) => {

  return (
    <form className={ style.form } onSubmit={ (e) => submitFunc(e) } onInput={ (e) => { inputFunc(e) } }>
      <fieldset className={ style.fieldset }>
        <label className={ style.label }>
          <span className={ style.text }>Ширина помещения, м</span>
          <input type="number" name="width" required className={ classNames('input', style.input) } />
        </label>

        <label className={ style.label }>
          <span className={ style.text }>Длина помещения, м</span>
          <input type="number" name="length" required className={ classNames('input', style.input) } />
        </label>
      </fieldset>

      <fieldset className={ style.fieldset }>
        <legend className={ classNames(style.text, style.text_legend) }>Тариф</legend>

        <label className={ style.labelTariff }>
          <input
            type="radio"
            name="tariff"
            value="economy"
            onChange={ radioFunc }
            checked={ check === 'economy' ? true : false }
            className={ style.radio }
          />
          <span className={ style.textRadio }>Эконом</span>
        </label>

        <label className={ style.labelTariff }>
          <input
            type="radio"
            name="tariff"
            value="comfort"
            checked={ check === 'comfort' ? true : false }
            onChange={ radioFunc }
            className={ style.radio }
          />
          <span className={ style.textRadio }>Комфорт</span>
        </label>

        <label className={ style.labelTariff }>
          <input
            type="radio"
            name="tariff"
            value="premium"
            checked={ check === 'premium' ? true : false }
            onChange={ radioFunc }
            className={ style.radio }
          />
          <span className={ style.textRadio }>Премиум</span>
        </label>
      </fieldset>
      <button
        type="submit"
        className={ classNames("btn", style.submit) }
        disabled={ param ? true : false }
      >
        Рассчитать
      </button>
      <button
        type="button"
        className={ classNames("btn", 'jsOpenPopup', style.btn) }
        style={{
          opacity: `${btnShow ? '1' : '0'}`
        }}
      >
        Заказать
      </button>
    </form>
  );
};
