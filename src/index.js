import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import styled from "styled-components";
import Machine from "./machineVending";
import InputCoin from "./inputMoney";

const Cabinet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
function App() {
  const [coin, setCoin] = useState(0);
  const onCoinChanged = total => {
    setCoin(total);
  };
  const onOk = price => {
    setCoin(coin - price);
  };
  return (
    <Cabinet>
      <Machine coin={coin} onOk={onOk} />
      <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
    </Cabinet>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
