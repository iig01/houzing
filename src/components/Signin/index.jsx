import { Container, Content } from "./style";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfully logged in");
  };

  const onSubmit = async () => {
    request({ me: true, url: `/public/auth/login`, method: "POST", body }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      }
    );
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button width="%" onClick={onSubmit}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Signin;
