import {
  Container,
  Content,
  Icons,
  Section,
  Details,
  Description,
  Wrapper,
  User,
  MapWrapper,
} from "./style";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import useRequest from "../../hooks/useRequest";
import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
import nouser from "../../assets/img/nouser.jpg";
import Yandex from "../Generic/Yandex";
import Recent from "../Recent";
import React from "react";
// const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  const params = useParams();
  // const request = useRequest();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city},{data?.address},{data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Love</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Car />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>Area{data?.houseDetails?.area || 0}</Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del className="info">${data?.price || 0}/mo</del>
                <h2 style={{ alignItems: "center" }} className="title">
                  ${data?.salePrice || 0}/mo
                </h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title mt={40}>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  AC {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Lawn {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Laundry {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Microwave {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Outdoor Shower {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Refrigerator {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Sauna {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Swimming Pool {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  TV Cable {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Washer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  WiFi {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Window Coverings {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dining room {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">John Doe</div>
              <div className="info">+123 456 789</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <MapWrapper>
        <Content.Title mt={48} mb>
          Location
        </Content.Title>
        <Yandex />
      </MapWrapper>
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
