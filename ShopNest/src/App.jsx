import React from 'react';
import style from './App.module.css'
import { ButtonPayment } from './components/buttonComponent/Button'
import { ButtonLogin as ButtonPadrao } from './components/buttonComponent/Button'
import { ScreenWhite } from './components/backgroundComponent/Screen'
import { NavBar } from "./components/navBar/NavBar"
import { InputPadrao } from './components/inputComponent/Input'
import { InputPayment } from './components/inputComponent/Input';
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

    </div>
    
    </>
  )
}

export default App
