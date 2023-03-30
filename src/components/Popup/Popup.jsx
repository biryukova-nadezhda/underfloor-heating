import React, { useState, useEffect } from 'react';
import style from './Popup.module.css';
import { PopupForm } from '../PopupForm/PopupForm';

export const Popup = ({ openPopup }) => {
  const [ close, setClose ] = useState(false);
  const [ opacity, setOpacity ] = useState(false);

  const openHandler = () => {
    setClose(true);
    setTimeout(() => {
      setOpacity(true);
    }, "300");
  }

  const closeHandler = () => {
    setOpacity(false);
    setTimeout(() => {
      setClose(false);
    }, "500");
  }

  useEffect(() => {
    const openButtons = document.querySelectorAll(`.${ openPopup }`);
    openButtons.forEach(btn => btn.addEventListener('click', openHandler));

    if (close === false) {
      window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' || e.keyCode === 27) {
          closeHandler();
        }
      });
    }
  }, [close, openPopup]);

  return (
    <>
      { close &&
        <div className={ style.wrapper }
          style={ {
            opacity: `${ opacity ? '1' : '0' }`
          } }
        >
          <div className={ style.popup }>
            <div className={ style.content__block }>
              <h2 className={ style.title }>Оставьте заявку и&nbsp;мы&nbsp;перезвоним</h2>
              <p className={ style.description }>Наши мастера свяжутся с&nbsp;вами в&nbsp;течение 3 часов</p>
              <PopupForm closeFunc={ closeHandler } />
            </div>

            <button type="button" className={ style.btn_close } onClick={ closeHandler }></button>
          </div>
        </div> }
    </>
  )
}
