import React from 'react';
import Background from '../components/Background';
import Card from './../components/Card';
import HorizontalAlign from './../components/HorizontalAlign';
import PositionAbsolute from './../components/PositionAbsolute';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { ReactComponent as Logo } from './../assets/logo.svg';
import { ReactComponent as BackgroundImage } from './../assets/bg-image.svg';

const App = () => 
  <Background>
    <Logo style={{margin: 20}} />
    <PositionAbsolute right="0px" top="calc(50% - 350px)">
      <BackgroundImage height="700px" width="473px" />
    </PositionAbsolute>
    <PositionAbsolute left="20px" bottom="50px">
      <HorizontalAlign width="533px">
        <Card 
          title="документы" 
          description="Руководство пользователя"
          linkText="Скачать"
          href="#"
          download=""
          rightIcon={<FaFileAlt />}
        />
        <Card 
          title="контакты" 
          description="По всем вопросам об условиях и тарифах напишите нам"
          linkText="Напишите нам"
          href="#"
          rightIcon={<FaArrowRight width="16px" height="16px" />}
        />
      </HorizontalAlign>
    </PositionAbsolute>
  </Background>
;

export default App;
