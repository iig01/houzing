import { Tabs } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 100%;
  background: #e6e9ec;
`;

const AntTabs = styled(Tabs)`
  width: 100%;
  max-width: 580px;
  margin: 64px;
`;

export { Container, AntTabs };
