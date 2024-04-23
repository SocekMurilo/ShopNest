import React from 'react';
import style from "./Input.module.css";


export const InputPadrao = (props) => {
    return (
        <input className={style["InputP"]} placeholder={props.placeholderValue}/>
        
    )
}

