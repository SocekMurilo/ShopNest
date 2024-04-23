import React from 'react';
import style from './App.module.css';

import { NavBar } from "./components/navBar/NavBar";

import { ScreenWhite } from './components/backgroundComponent/Screen';
import { ScreenLogo } from './components/backgroundComponent/Screen';

import { ButtonPayment } from './components/buttonComponent/Button';
import { ButtonLogin as ButtonPadrao } from './components/buttonComponent/Button';
import { ButtonPay } from './components/buttonComponent/Button';
import { ButtonCacular } from './components/buttonComponent/Button';
import { ButtonProduct } from './components/buttonComponent/Button';

import { InputPayment } from './components/inputComponent/Input';
import { InputPadrao } from './components/inputComponent/Input';
import { InputCard } from './components/inputComponent/Input';
import { InputDataCard } from './components/inputComponent/Input';
import { InputProduct } from './components/inputComponent/Input';



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
      <InputCard placeholderValue="ERIC C PEREIRA"/>
      <InputDataCard placeholderValue="00/00"/>
      <InputDataCard placeholderValue="123"/>

      <InputProduct placeholderValue="Ração"/>
      <InputProduct placeholderValue="R$ 19,99"/>
      <ButtonProduct name="Adicionar Foto"/>
      <ButtonProduct name="Salvar"/>

      <ScreenLogo/>


    </div>
    
    </>
  )
}

export default App
