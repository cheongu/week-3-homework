import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    <div>
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
        <label>작성자</label>
        <input
          type="text"
          name="writer"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value={todo.writer}
          onChange={onChangeHandler}
          maxLength={5}
        />
        <label>제목</label>
        <input
          type="text"
          name="title"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          placeholder="내용을 입력해주세요. (200자 이내)"
          value={todo.body}
          onChange={onChangeHandler}
        />
        <div>
          <button>추가하기</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
