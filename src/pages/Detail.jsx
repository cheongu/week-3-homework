import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearTodo,
  __getTodoThunk,
  __updateTodoThunk,
} from "../redux/modules/todoSlice";
import Comments from "../comments/Comments";
import Layout from "../components/Layout";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    dispatch(__getTodoThunk(id));
    return () => dispatch(clearTodo());
  }, [dispatch, id]);

  useEffect(() => {
    setUpdatedTodo(todo.body);
  }, [todo]);

  const onSaveButtonHandler = () => {
    if (updatedTodo.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    dispatch(
      __updateTodoThunk({
        ...todo,
        body: updatedTodo,
      })
    );
    setIsEditMode(false);
  };

  return (
    <Layout>
      {!isEditMode && (
        <div>
          id: ({todo?.id})
          <button
            size="24"
            onClick={() => {
              navigate("/List");
            }}
          >
            이전으로
          </button>
        </div>
      )}

      <div>{todo?.title}</div>
      <div>
        {isEditMode ? (
          <>
            <Textarea
              name="body"
              rows="10"
              maxLength={200}
              value={updatedTodo}
              onChange={(event) => {
                setUpdatedTodo(event.target.value);
              }}
            />
          </>
        ) : (
          <div>{todo?.body}</div>
        )}

        <div>
          {isEditMode ? (
            <button size="large" onClick={onSaveButtonHandler}>
              저장
            </button>
          ) : (
            <button
              size="large"
              onClick={() => {
                setIsEditMode(true);
              }}
            >
              수정
            </button>
          )}
        </div>
      </div>
      {!isEditMode && <Comments />}
    </Layout>
  );
};

export default Detail;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;
