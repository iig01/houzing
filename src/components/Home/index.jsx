import React from "react";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
