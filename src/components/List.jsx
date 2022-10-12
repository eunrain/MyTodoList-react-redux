import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const StList = styled.div`
  padding: 0 20px;
`;
const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = () => {
  const todoList = useSelector((state) => state.todo);

  return (
    <StList>
      <h2>working..🔥</h2>
      <StListWrapper>
        {todoList.map(
          // if(isDone===false)
          (todo) => !todo.isDone && <Todo todo={todo} key={todo.id} />
        )}
      </StListWrapper>
      <h2>Done..🎉</h2>
      <StListWrapper>
        {todoList.map(
          // if(isDone===true)
          (todo) => todo.isDone && <Todo todo={todo} key={todo.id} />
        )}
      </StListWrapper>
    </StList>
  );
};

export default List;
