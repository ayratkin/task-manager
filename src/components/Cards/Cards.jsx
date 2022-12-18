// Libraries
import React from "react";
// App components
import Card from "../Card/Card.jsx";
// Component styles
import style from "./Cards.module.scss";

const Cards = () => {
  return (
    <div>
      <Card card_text="Убраться дома" />
      <Card card_text="Покормить кота" />
    </div>
  );
};

export default Cards;

