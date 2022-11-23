import { Container, Content, Details, Divider, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import { message } from "antd";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";

const HouseCard = ({ data = {}, gap, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    attachments,
    houseDetails,
    price,
    salePrice,
    address,
    city,
    country,
    description,
    category,
    favorite,
    id,
  } = data;

  const save = (e) => {
    e?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite)
          res?.success && message.warning(" Removed from favorites");
        else res?.success && message.info("Added to favorites");
        refetch && refetch();
      });
  };

  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">
          {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
          {category?.name || "Category"} {houseDetails?.room || 0}-rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Area{houseDetails?.area || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info" style={{ textDecoration: "line-through" }}>
            ${salePrice || 0}/mo
          </div>
          <div className="subTitle">${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love onClick={save} favorite={favorite} />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
