import { Content } from "./style";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signup = () => {
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
    request({
      me: true,
      url: `/public/auth/register`,
      method: "POST",
      body,
    }).then((res) => {
      if (res) {
        navigate("/signin");
        info();
      }
    });
  };

  return (
    <Content>
      <div className="subTitle">Sign up</div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="firstname" type="text" />
      <Input onChange={onChange} placeholder="lastaname" type="text" />
      <Input onChange={onChange} placeholder="password" type="password" />
      <Button width="%" onClick={onSubmit}>
        Sign up
      </Button>
    </Content>
  );
};

export default Signup;
