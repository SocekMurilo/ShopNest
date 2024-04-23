import React from 'react';
import style from './App.module.css';

import { NavBar } from "./components/navBar/NavBar";

import { ScreenWhite } from './components/backgroundComponent/Screen';

import { ButtonPayment } from './components/buttonComponent/Button';
import { ButtonLogin as ButtonPadrao } from './components/buttonComponent/Button';
import { ButtonPay } from './components/buttonComponent/Button';
import { ButtonCacular } from './components/buttonComponent/Button';

import { InputPayment } from './components/inputComponent/Input';
import { InputPadrao } from './components/inputComponent/Input';
import { InputCard } from './components/inputComponent/Input';


function App() {


  return (
    <>
    <NavBar></NavBar>
    
    <div className={style["container"]}>
      <InputPadrao placeholderValue="Nome" />
      <InputPadrao placeholderValue="Cpf" />
      <InputPadrao placeholderValue="Email" />
      <InputPadrao placeholderValue="Senha" />
      <InputPadrao placeholderValue="Confirmar Senha" />
      <InputPadrao placeholderValue="Nome" />
      <InputPadrao placeholderValue="Senha" />
      <ButtonPadrao name="Entrar"/>
      <ButtonPadrao name="Voltar"/>
      <ButtonPayment name="Continuar"/>

      <InputPayment placeholderValue="XXXXXX"/>
      <ButtonCacular name="Calcular"/>
      <InputPayment name="00000-000"/>
      <ButtonCacular name="Calcular"/>
      <ButtonPay name="Comprar"/>
      <ButtonPay name="Continuar Comprando"/>

      <InputCard placeholderValue="XXXX-XXXX-XXXX"/>

    </div>
    
    </>
  )
}

export default App
