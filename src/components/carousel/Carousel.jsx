import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image';
// import styles from './styles.module.scss';

import neutropica from '../../assets/Neutropica.png'


export const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{backgroundColor : "#5A6B49", textAlign : "center", width: "80%", marginTop: "2%", alignItems: "center"}}>
      <Carousel.Item>
      <Image
          alt=""
          src={neutropica}
          width="90%"
          height="800px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          alt=""
          src={neutropica}
          width="90%"
          height="800px"
          className="d-inline-block align-top"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          alt=""
          src={neutropica}
          width="90%"
          height="800px"
          fluid
        />{" "}
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}