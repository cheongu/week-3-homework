import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodosThunk } from "../redux/modules/todosSlice";
import TodoCard from "../components/TodoCard";

const List = () => {
  const dispatch = useDispatch();
  const { todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  if (todos.length === 0)
    return (
      <div>
        <h2>할일이 없네요!</h2>
      </div>
    );

  if (error) return <div>알수 없는 에러가 발생했습니다.</div>;
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default List;
