import { useState } from 'react';
import style from "./Payment.module.css";
import person from '../../assets/pay/person.png';
import cart from '../../assets/pay/cart.png';
import creditCard from '../../assets/pay/creditCard.png';
import ok from '../../assets/pay/ok.png';
import { NavBar } from "../../components/navBar/NavBar";

export const Payment = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentSelection = (paymentType) => {
        setSelectedPayment(paymentType);
    };

    return (
        <>
            <NavBar />
            <div className={style["centralizar"]}>
                <div className={style["sizeWhite"]}>
                    <div className={style["card"]}>
                        <img src={person} alt="Person" />
                        <div className={style["progressBar"]}></div>
                        <img src={cart} alt="Cart" />
                        <div className={style["progressBar"]}></div>
                        <img src={creditCard} alt="CreditCard" />
                        <div className={style["bar"]}></div>
                        <img src={ok} alt="OK" />
                        <div className={style["paymentTypes"]}>
                            <h1>FORMA DE PAGAMENTO</h1> 
                            <div className={style["paymentType"]}>
                                <label htmlFor="cartao" className={style["paymentLabel"]}>
                                    <input
                                        type="checkbox"
                                        id="cartao"
                                        checked={selectedPayment === 'cartao'}
                                        onChange={() => handlePaymentSelection('cartao')}
                                        style={{ display: 'none' }}
                                    />
                                    <div className={`${style["paymentCheck"]} ${selectedPayment === 'cartao' ? style["checked"] : ""}`}></div> {/* Div representando o estado do checkbox */}
                                    <h2 className={style["paymentTitle"]}>Cartão</h2>
                                </label>
                                <p className={style["paymentDescription"]}>Parcelamento de até 10X sem juros.</p>
                            </div>
                            <div className={style["paymentType"]}>
                                <label htmlFor="pix" className={style["paymentLabel"]}>
                                    <input
                                        type="checkbox"
                                        id="pix"
                                        checked={selectedPayment === 'pix'}
                                        onChange={() => handlePaymentSelection('pix')}
                                        style={{ display: 'none' }}
                                    />
                                    <div className={`${style["paymentCheck"]} ${selectedPayment === 'pix' ? style["checked"] : ""}`}></div>
                                    <h2 className={style["paymentTitle"]}>Pix</h2>
                                </label>
                                <p className={style["paymentDescription"]}>O Código Pix gerado para pagamento é válido por 30 minutos após a finalização do pedido.</p>
                            </div>
                            <div className={style["paymentType"]}>
                                <label htmlFor="boleto" className={style["paymentLabel"]}>
                                    <input
                                        type="checkbox"
                                        id="boleto"
                                        checked={selectedPayment === 'boleto'}
                                        onChange={() => handlePaymentSelection('boleto')}
                                        style={{ display: 'none' }}
                                    />
                                    <div className={`${style["paymentCheck"]} ${selectedPayment === 'boleto' ? style["checked"] : ""}`}></div>
                                    <h2 className={style["paymentTitle"]}>Boleto</h2>
                                </label>
                                <p className={style["paymentDescription"]}>Vencimento em 1 dia útil. A data de entrega será alterada devido ao tempo de processamento do boleto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
