import React from "react";
import styled from "styled-components";
import { VscHome } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <VscHome
        size="24"
        onClick={() => {
          navigate("/");
        }}
      />
      <StTitle>모두의 투두리스트</StTitle>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const StTitle = styled.div`
  font-size: 24px;
`;
