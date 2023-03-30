import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import style from './PopupForm.module.css';
import { fetchFunc } from '../../utils/fetchFunc';
const URL = 'https://jsonplaceholder.typicode.com/posts';

export const PopupForm = ({ closeFunc }) => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');

  const [ nameTouch, setNameTouch ] = useState(false);
  const [ phoneTouch, setPhoneTouch ] = useState(false);

  const [ nameError, setNameError ] = useState('Введите ваше имя');
  const [ phoneError, setPhoneError ] = useState('Введите номер телефона');
  const [ formValid, setFormValid ] = useState(false);

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [ nameError, phoneError ]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameTouch(true);
        break;
      case 'phone':
        setPhoneTouch(true);
        break;
    };
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    const re = /^[А-Яа-яЁё][-А-Яа-яЁё\s]{2,}$/;
    if (!re.test(e.target.value)) {
      setNameError('Некорректное имя');
    } else {
      setNameError('');
    }
  }

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
    const re = /^(?:\+375|375)(?:\(\d{2,3}\)|\d{2,3})\s?\d{2,3}(?:[\s-]?\d{2}){2}$/;
    !re.test(e.target.value) ? setPhoneError('Неверный номер') : setPhoneError('');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const dataForm = {
      name: form.name.value,
      phone: form.phone.value
    };

    fetchFunc(dataForm, URL, (data) => console.log(data));
    closeFunc();
  }

  return (
    <>
      <form id="formOrder" className={ style.form } onSubmit={ (e) => submitHandler(e) }>
        <fieldset className={ style.fieldset }>
          <label className={ style.label }>
            <span className={ style.text }>Имя</span>
            <input
              type="text"
              name="name"
              id="popupName"
              value={ name }
              onBlur={ (e) => blurHandler(e) }
              onChange={ (e) => nameChangeHandler(e) }
              className={ classNames('input', style.input) } />
            { (nameTouch && nameError) && <div className={ style.error }><span >{ nameError }</span></div>}
          </label>

          <label className={ style.label }>
            <span className={ style.text }>Телефон</span>
            <input
              type="tel"
              name="phone"
              id="popupPhone"
              value={ phone }
              onBlur={ (e) => blurHandler(e) }
              onChange={ (e) => phoneChangeHandler(e) }
              className={ classNames('input', style.input) } />
            { (phoneTouch && phoneError) && <span className={ style.error }>{ phoneError }</span> }
          </label>
        </fieldset>

        <button
          type="submit"
          disabled={ !formValid }
          className={ classNames('btn', style.btn_form) }
        >Отправить</button>
      </form>
    </>
  );
};
