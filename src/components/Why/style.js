import styled from "styled-components";
import { ReactComponent as cardMessage } from "../../assets/icons/cardMessage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 100%;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  /* height: 434px; */
  /* margin-top: 40px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.div``;
Icon.Email = styled(cardMessage)`
  margin-bottom: 24px;

  & path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };
