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

export const InputDataCard = (props) => {
    return (
        <input className={style["InputDataCard"]} placeholder={props.placeholderValue}/>
    )
}

export const InputProduct = (props) => {
    return (
        <input className={style["InputProduct"]} placeholder={props.placeholderValue}/>
    )
}