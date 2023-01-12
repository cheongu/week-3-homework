import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { clearTodo, __addTodoThunk } from "../redux/modules/todosSlice";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSuccess = useSelector((state) => state.todos.isSuccess);
  const [todo, setTodo] = useState({
    writer: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    if (!isSuccess) return;
    if (isSuccess) navigate("/List");

    return () => dispatch(clearTodo());
  }, [dispatch, isSuccess, navigate]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <Layout>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            todo.writer.trim() === "" ||
            todo.title.trim() === "" ||
            todo.body.trim() === ""
          ) {
            return alert("모든 항목을 입력해주세요.");
          }
          dispatch(__addTodoThunk(todo));
          setTodo({ title: "", body: "", writer: "" });
        }}
      >
        <label>작성자 </label>
        <StInput
          type="text"
          name="writer"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value={todo.writer}
          onChange={onChangeHandler}
          maxLength={5}
        />
        <label>제목 </label>
        <StInput
          type="text"
          name="title"
          placeholder="제목을 입력해주세요. (50자 이내)"
          value={todo.title}
          onChange={onChangeHandler}
          maxLength={50}
        />
        <label>내용 </label>
        <StInput
          type="text"
          name="body"
          placeholder="내용을 입력해주세요. (200자 이내)"
          value={todo.body}
          onChange={onChangeHandler}
        />
        <button>추가하기</button>
      </form>
    </Layout>
  );
};

export default Write;

const StForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  flex-direction: column;
`;

const StInput = styled.input`
  padding: 0 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;
