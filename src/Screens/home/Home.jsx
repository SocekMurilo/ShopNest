import style from "./Home.module.css"
import { NavBar } from "../../components/navBar/NavBar"
import { CarouselHome } from "../../components/carousel/Carousel"


export const Home = () => {
    return (
        <>
            <NavBar />
            <div className={style["container"]}>
                    <CarouselHome />
            </div>
        </>
    )
}