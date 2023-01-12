import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../redux/modules/todosSlice";
import Layout from "./Layout";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(__deleteTodoThunk(todo.id));
  };

  return (
    <div
      onClick={() => {
        navigate(`/Detail/${todo.id}`);
      }}
    >
      <StCard>
        <h2>{todo.title}</h2>
        <h5>작성자 : {todo.writer}</h5>
        <StButton
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            const result = window.confirm("이 할일을 지울까요?");
            if (result) {
              return onDeleteHandler();
            } else {
              return;
            }
          }}
        >
          삭제하기
        </StButton>
      </StCard>
    </div>
  );
};
export default TodoCard;

// const StCardBox = styled.div`
//   display: flex;
//   padding: 12px;
//   height: 90px;
//   border: 1px solid #ddd;
//   background-color: #fff;
//   border-radius: 12px;
//   width: 100%;
//   margin-bottom: 12px;
// `;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

const StButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  width: 140px;

  font-weight: 700;
`;
