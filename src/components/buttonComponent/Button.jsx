import React from 'react';
import style from "./Button.module.css";

export const ButtonPayment = (props) => {
  return (
    <button className={style["ButtonPayment"]}>
      {props.name}
    </button>
  );
}


export const ButtonLogin = (props) => {
  return (
    <button className={style["ButtonLogin"]}>
      {props.name}
    </button>
  )
}

export const ButtonPay = (props) => {
  return (
    <button className={style["ButtonPay"]}>
      {props.name}
    </button>
  )
}

export const ButtonCacular = (props) => {
  return (
    <button className={style["ButtonCalc"]}>
      {props.name}
    </button>
  )
}

export const ButtonProduct = (props) => {
  return(
    <button className={style["ButtonProduct"]}>
      {props.name}
    </button>
  )
}