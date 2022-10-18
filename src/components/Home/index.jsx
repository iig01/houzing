import React from "react";
import { Button, Input } from "../Generic/";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input placeholder="test" />
      <Button>test</Button>
    </Container>
  );
};

export default Home;
