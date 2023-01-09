import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

const Detail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

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
