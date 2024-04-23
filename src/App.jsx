import React from 'react';
import style from './App.module.css'
import { ButtonPayment } from './components/buttonComponent/Button'
import { ButtonLogin as ButtonPadrao } from './components/buttonComponent/Button'
import { ScreenWhite } from './components/backgroundComponent/Screen'
import { NavBar } from "./components/navBar/NavBar"
import { InputPadrao } from './components/inputComponent/Input'
function App() {


  return (
    <>
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
    </div>
    
    <main className={style["wrap-all"]}>
      <h1 className={style["text-ex"]}>Teste</h1>
      <NavBar></NavBar>
    </main>
    </>
  )
}

export default App
