import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { __getTodos } from "../redux/modules/todosSlice";
import axios from "axios";

const Detail = () => {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost3001/todos");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <Link to="/">home 페이지로 이동하기</Link>
    </div>
  );
};

export default Detail;
