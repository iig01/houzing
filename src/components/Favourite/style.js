import styled from "styled-components";

const Container = styled.div`
  padding: var(--padding);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  max-width: 1440px;
  width: 100%;
  /* margin: auto; */
  margin-top: 50px;
`;

export { Container };
