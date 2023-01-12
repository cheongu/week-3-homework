import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { VscDebugStart } from "react-icons/vsc";

const Home = () => {
  const nagivate = useNavigate();
  return (
    <Layout>
      <StContainer>
        <StMain>
          <StText>무엇을 할까요?</StText>
          <StButton
            type="button"
            onClick={() => {
              nagivate("/Write");
            }}
          >
            할일 기록하기
            <VscDebugStart />
          </StButton>
          <StButton
            type="button"
            onClick={() => {
              nagivate("/List");
            }}
          >
            TODO LIST
            <VscDebugStart />
          </StButton>
        </StMain>
      </StContainer>
    </Layout>
  );
};

export default Home;

const StContainer = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const StMain = styled.div`
  margin-top: 24px;
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const StText = styled.div`
  display: flex;
  font-size: 32px;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
`;

const StButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  width: 100%;
  height: 120px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;
`;
