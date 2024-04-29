import React from 'react';
import style from './Parts.module.css';

import { NavBar } from "../../components/navBar/NavBar";

import { ScreenWhite } from '../../components/backgroundComponent/Screen';
import { ScreenLogo } from '../../components/backgroundComponent/Screen';

import { ButtonPayment } from '../../components/buttonComponent/Button';
import { ButtonLogin as ButtonPadrao } from '../../components/buttonComponent/Button';
import { ButtonPay } from '../../components/buttonComponent/Button';
import { ButtonCacular } from '../../components/buttonComponent/Button';
import { ButtonProduct } from '../../components/buttonComponent/Button';

import { InputPayment } from '../../components/inputComponent/Input';
import { InputPadrao } from '../../components/inputComponent/Input';
import { InputCard } from '../../components/inputComponent/Input';
import { InputDataCard } from '../../components/inputComponent/Input';
import { InputProduct } from '../../components/inputComponent/Input';
import { CardComponent } from '../../components/card/CardComponent';
import { CarouselHome } from '../../components/carousel/Carousel';

export const Parts = () => {
    return(
        <>
            <NavBar></NavBar><br/>
            
            <div className={style["container"]}>
            <InputPadrao placeholderValue="Nome" /><br/>
            <InputPadrao placeholderValue="Cpf" /><br/>
            <InputPadrao placeholderValue="Email" /><br/>
            <InputPadrao placeholderValue="Senha" /><br/>
            <InputPadrao placeholderValue="Confirmar Senha" /><br/>
            <InputPadrao placeholderValue="Nome" /><br/>
            <InputPadrao placeholderValue="Senha" /><br/>
            <ButtonPadrao name="Entrar"/><br/>
            <ButtonPadrao name="Voltar"/><br/>
            <ButtonPayment name="Continuar"/><br/>

            <InputPayment placeholderValue="XXXXXX"/><br/>
            <ButtonCacular name="Calcular"/><br/>
            <InputPayment name="00000-000"/><br/>
            <ButtonCacular name="Calcular"/><br/>
            <ButtonPay name="Comprar"/><br/>
            <ButtonPay name="Continuar Comprando"/><br/>

            <InputCard placeholderValue="XXXX-XXXX-XXXX"/><br/>
            <InputCard placeholderValue="ERIC C PEREIRA"/><br/>
            <InputDataCard placeholderValue="00/00"/><br/>
            <InputDataCard placeholderValue="123"/><br/>

            <InputProduct placeholderValue="Ração"/><br/>
            <InputProduct placeholderValue="R$ 19,99"/><br/>
            <ButtonProduct name="Adicionar Foto"/><br/>
            <ButtonProduct name="Salvar"/><br/>

            <ScreenLogo/><br/>

            <CarouselHome/><br/>
            <CardComponent/><br/>

            </div>
        </>
    )
}