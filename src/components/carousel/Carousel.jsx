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
    <Carousel activeIndex={index} onSelect={handleSelect} style={{backgroundColor : "black", textAlign : "center"}}>
      <Carousel.Item>
      <Image
          alt=""
          src={neutropica}
          width="1067px"
          height="600px"
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
          width="1067px"
          height="600px"
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
          width="600px" 
          height="600px"
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