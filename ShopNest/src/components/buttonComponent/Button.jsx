import React from 'react';
import style from "./Button.module.css";

export const ButtonComponent = (props) => {
  return (
    <button className={style["sizeButton"]}>
      Continuar
    </button>
  );
}
