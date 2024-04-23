import React from 'react';
import style from "./Input.module.css";


export const InputPadrao = (props) => {
    return (
        <input className={style["InputP"]} placeholder={props.placeholderValue}/>
        
    )
}

export const InputPayment = (props) => {
    return (
        <input className={style["InputPay"]} placeholder={props.placeholderValue}/>
    )
}

export const InputCard = (props) => {
    return (
        <input className={style["InputCard"]} placeholder={props.placeholderValue}/>
    )
}