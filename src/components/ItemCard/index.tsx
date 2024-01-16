// src\components\ItemCard\index.tsx
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Img, Text } from "components";

interface ItemCardProps {
  cardData: {
    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: string;
  };
}

const ItemCard: React.FC<ItemCardProps> = ({ cardData }) => {
  const { imgSrc, name, description, price } = cardData;

  return (
    <Card style={{ width: "32rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Text
          className="text-1xl text-black-900 sm:text-xl "
          size="txtBalooRegular24"
        >
          <Card.Title>{name}</Card.Title>
        </Text>
        <Text
          className="text-1xl text-black-900 sm:text-xl "
          size="txtBalooRegular24"
        >
          <Card.Text>{description}</Card.Text>
        </Text>
        <Text
          className="text-1xl text-black-900 sm:text-xl"
          size="txtBalooRegular24"
        >
          <Button variant="primary">{`Buy for ${price}`}</Button>
        </Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
