import React, { useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Properties;
