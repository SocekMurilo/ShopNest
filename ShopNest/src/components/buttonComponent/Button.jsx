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