import React, { useRef, useState, useEffect } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h1 className="title">Category</h1>
        <h1 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h1>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              key={value.id}
              data={value}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
