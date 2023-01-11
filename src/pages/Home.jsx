import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nagivate = useNavigate();
  return (
    <StContainer>
      <StMain>
        <StText>무엇을 할까요?</StText>
        <button
          type="button"
          onClick={() => {
            nagivate("/Write");
          }}
        >
          할일 기록하기
        </button>
        <button
          type="button"
          onClick={() => {
            nagivate("/List");
          }}
        >
          TODO LIST
        </button>
      </StMain>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div``;

const StMain = styled.div``;

const StText = styled.div``;

const StFormLabel = styled.div``;
