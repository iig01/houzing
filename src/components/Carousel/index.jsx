import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/apartment1.png";
import img2 from "../../assets/img/apartment2.png";

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") slider.current.next();
    if (name === "right") slider.current.prev();
  };

  const slider = useRef();

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool </Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left />
      <Arrow onClick={onMove} data-name="right" />
    </Container>
  );
};

export default GenCarousel;
