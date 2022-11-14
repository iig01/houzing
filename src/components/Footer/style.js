import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  position: relative;
  margin: auto;
  width: 100%;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;

  background: #0d263b;
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 20px;

  & path {
    fill: #fff;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 20px;
  & path {
    fill: #fff;
  }
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Icon };
