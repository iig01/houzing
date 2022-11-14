import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Why from "../Why";
import Banner from "../Banner";
import Recommended from "../Recommended";
import { Container } from "./style";
import Recent from "../Recent";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
