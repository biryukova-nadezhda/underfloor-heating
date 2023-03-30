import React, { useState } from 'react';
import style from './Calc.module.css';
import classNames from 'classnames';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { CalcForm } from '../CalcForm/CalcForm';
import { CalcTotalBlock } from '../CalcTotalBlock/CalcTotalBlock';

const tariff = {
  economy: 550,
  comfort: 1400,
  premium: 2700,
};

export const Calc = () => {
  const [ price, setPrice ] = useState(0);
  const [ square, setSquare ] = useState(0);
  const [ param, setParam ] = useState(true);
  const [ value, setValue ] = useState('comfort');
  const [ order, setOrder ] = useState(false);

  const radioFunc = (e) => {
    setValue(e.target.value);
  }

  const calculate = (e) => {
    e.preventDefault();
    const _square = e.target.width.value * e.target.length.value;
    setSquare(_square);
    setPrice(_square * tariff[ value ]);
    setOrder(true);
  }

  const inputFunc = (e) => {
    const form = e.target.closest('form');
    setParam(!(form.width.value > 0 && form.length.value > 0));
  }

  return (
    <Section classSection={ style.calc } id="calc" classContainer={ style.container }>
      <div className={ classNames("gray-block", style.content) }>
        <SectionTitle classTitle={ style.title } textTitle="Рассчитайте стоимость" />
        <CalcForm
          submitFunc={ calculate }
          inputFunc={ inputFunc }
          radioFunc={ radioFunc }
          param={ param }
          check={ value }
          btnShow={ order }
        />
      </div>
      <CalcTotalBlock square={ square } price={ price } />
    </Section>
  );
};
