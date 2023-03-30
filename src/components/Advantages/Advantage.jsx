import React from 'react';
import style from './Advantages.module.css';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { List } from '../List/List';

export const Advantage = () => {
  return (
    <Section classSection={ style.advantages } classContainer={ style.container }>
      <SectionTitle classTitle={ style.title } textTitle="Наши преимущества" />
      <List nameList="advantages" classList={ style.list }>
        <li className={ style.item }>Надежные материалы</li>
        <li className={ style.item }>опытные монтажники</li>
        <li className={ style.item }>Регулируемая температура пола</li>
        <li className={ style.item }>Защита от замыканий</li>
        <li className={ style.item }>Гарантия до 10 лет</li>
      </List>
    </Section>
  );
};
