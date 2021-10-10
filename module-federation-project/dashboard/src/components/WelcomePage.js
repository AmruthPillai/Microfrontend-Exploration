import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Inter", sans-serif;
    text-align: center;
    font-size: 48px;
  }
`;

const WelcomePage = () => {
  return (
    <PageContainer>
      <h1>Hello from Dashboard!</h1>
    </PageContainer>
  );
};

export default WelcomePage;
