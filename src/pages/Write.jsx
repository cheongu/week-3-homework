import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const $ = useSelector((state) => state.todos.$);
  const [todo, setTodo] = useState({
    writer: "",
    title: "",
    body: "",
  });

  const onChangeHandler = (event) => {
    alert("클릭");
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
        }}
      >
        <label>작성자</label>
        <input
          type="text"
          name="writer"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value
          onChange={onChangeHandler}
          maxLength={5}
        />
        <label>제목</label>
        <input
          type="text"
          name="title"
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          value
          onChange={onChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          placeholder="내용을 입력해주세요. (200자 이내)"
          value
          onChange={onChangeHandler}
        />
        <div>
          <button>추가하기</button>
        </div>
      </form>

      <Link to="/">home 페이지로 이동하기</Link>
    </div>
  );
};

export default Write;
