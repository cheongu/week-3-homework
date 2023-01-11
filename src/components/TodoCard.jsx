import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../redux/modules/todosSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(__deleteTodoThunk(todo.id));
  };

  return (
    <StCardBox
      onClick={() => {
        navigate(`/Detail/${todo.id}`);
      }}
    >
      <StCard>
        <h2>{todo.title}</h2>
        <h5>작성자 : {todo.writer}</h5>
        <button
          onClick={(event) => {
            event.stopPropagation();
            const result = window.confirm("이 할일을 지울까요?");
            if (result) {
              return onDeleteHandler();
            } else {
              return;
            }
          }}
        ></button>
      </StCard>
    </StCardBox>
  );
};
export default TodoCard;

const StCardBox = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

const StCard = styled.div`
  display: flex;
  align-items: flex-end;
`;
