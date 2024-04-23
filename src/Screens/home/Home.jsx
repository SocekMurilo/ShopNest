import style from "./Home.module.css"
import { NavBar } from "../../components/navBar/NavBar"
import { CarouselHome } from "../../components/carousel/Carousel"
import { CardComponent } from "../../components/card/CardComponent"


export const Home = () => {
    return (
        <>
            <NavBar />
            <div className={style["container"]}>
                    <CarouselHome />
            </div>
            <h1 style={{color: "white", margin: "2% 0 2% 4%"}}>PRODUTOS PARA AVES</h1>
            <div style={{flexDirection: "row", display: "flex"}}>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </>
    )
}
