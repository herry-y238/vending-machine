import React from "react";
import styled from "styled-components";

const DivBox = styled.div`
  border: 1px solid LIGHTSEAGREEN;
  height: 120px;
  width: 80px;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 2px;
`;
const Img = styled.img`
  height: 60px;
  flex-grow: 1;
`;

const DivName = styled.div`
  font-size: 0.8em;
  text-align: center;
`;
const DivPrice = styled.div`
  text-align: center;
`;

const DivStatus = styled.div`
  background-color: ${props =>
    props.available ? "limegreen" : "MIDNIGHTBLUE"};
  height: 20px;
  width: 80%;
  margin: auto;
  &:hover {
    cursor: ${props => (props.available ? "pointer" : "arrow")};
  }
`;
const emptySlotImgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IQjPOaJwyRNq9Q6Gljej3LxRfDqV4fsWTiSNEHEiooEuGNRRCQ";

function SlotItem({ product, coin, onOk }) {
  const { productImageUrl, name, price } = product;

  return (
    <DivBox>
      <Img src={productImageUrl || emptySlotImgUrl} />
      <DivName>{name || "Out of Stock"}</DivName>
      <DivPrice>{price || ""}</DivPrice>
      <DivStatus
        onClick={() => {
          if (price > coin) return;
          onOk(price);
        }}
        available={name && coin >= price}
      />
    </DivBox>
  );
}
export default SlotItem;
