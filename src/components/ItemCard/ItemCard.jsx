/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCard.styles";
import {
  CardContentDiv,
  CardDiv,
  CategoryPara,
  CategorySpan,
  ItemImg,
  PricePara,
  TitlePara,
} from "./ItemCard.styles";

export function ItemCard(props) {
  const { title, price, description, category, images } = props;
  const [displayCard, setDisplaycard] = useState("inline-block");
  function handleErrorImg() {
    setDisplaycard("none");
  }

  return (
    <CardDiv $display={displayCard}>
      <ItemImg onError={handleErrorImg} src={images[0]} />
      <CardContentDiv>
        <TitlePara>{title}</TitlePara>
        <CategoryPara>
          <CategorySpan>Category</CategorySpan>: {category.name}
        </CategoryPara>
        <PricePara>${price}</PricePara>
      </CardContentDiv>
    </CardDiv>
  );
}
