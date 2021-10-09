import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 48px;
  }
`;

const Dashboard = () => (
  <Panel>
    <h1>Welcome to the Dashboard!</h1>
  </Panel>
);

export default Dashboard;
