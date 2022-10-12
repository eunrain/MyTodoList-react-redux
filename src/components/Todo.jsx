import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToDo, changeToDo } from "../redux/modules/todos";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 10px 20px;
`;
const StBox = styled.div`
  width: 280px;
  min-height: 160px;
  border: 4px solid #add3ff;
  border-radius: 18px;
  word-break: break-all;
  padding: 10px 20px;
`;
const StButton = styled.button`
  background-color: white;
  width: 100px;
  height: 40px;
  border: 2.5px solid #e5e5e5;
  border-radius: 10px;
`;
const StBtns = styled.footer`
  display: flex;
  justify-content: center;
  padding: 12px;
  gap: 12px;
`;

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteToDo = () => {
    dispatch(deleteToDo(todo.id));
  };

  const onClearToDo = () => {
    dispatch(changeToDo(todo.id));
  };

  const navigate = useNavigate();

  const onHandleClick = (e) => {
    e.preventDefault();
    navigate(`/detail/${todo.id}`, {
      state: { todo: todo },
    });
  };

  return (
    <StContainer>
      <StBox>
        <a href="#" onClick={onHandleClick}>
          상세보기
        </a>
        <h2 key={todo.id}>{todo.title}</h2>
        <div>{todo.body}</div>
        <StBtns>
          <StButton onClick={onDeleteToDo}>삭제하기</StButton>
          <StButton onClick={onClearToDo}>
            {todo.isDone ? "취소" : "완료"}
          </StButton>
        </StBtns>
      </StBox>
    </StContainer>
  );
};
export default Todo;
