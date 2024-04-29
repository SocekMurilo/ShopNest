import style from "./Payment.module.css";
import person from '../../assets/pay/person.png';
import cart from '../../assets/pay/cart.png';
import creditCard from '../../assets/pay/creditCard.png';
import ok from '../../assets/pay/ok.png';
import { NavBar } from "../../components/navBar/NavBar";

export const Payment = () => {
    return(
        <>
            <NavBar/>
            <div className={style["centralizar"]}>
                <div className={style["sizeWhite"]}>
                    <img src={person} alt="Person" />
                    <div className={style["progressBar"]}></div>
                    <img src={cart} alt="Cart" />
                    <div className={style["progressBar"]}></div>
                    <img src={creditCard} alt="CreditCard" />
                    <div className={style["bar"]}></div>
                    <img src={ok} alt="OK" />
                </div>
            </div>
        </>
    )
}