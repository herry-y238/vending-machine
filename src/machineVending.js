import React, { useState } from "react";
import styled from "styled-components";
import SlotItem from "./slotItem";
import { products } from "./data";

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
function Machine({ coin, onOk }) {
  const [productList] = useState(products);
  return (
    <Container>
      {productList &&
        productList.map(p => {
          return <SlotItem key={p.id} product={p} coin={coin} onOk={onOk} />;
        })}
    </Container>
  );
}
export default Machine;
