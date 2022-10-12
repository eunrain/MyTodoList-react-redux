import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/modules/todos";
import styled from "styled-components";

const StForm = styled.form`
  background-color: #eaf2ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 40px;
`;
const StLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;
const StInput = styled.input`
  border: none;
  width: 230px;
  height: 40px;
  border-radius: 10px;
`;
const StBtn = styled.button`
  background-color: #e5e5e5;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;

const Form = () => {
  const [title, setTitle] = useState(""); //input 제목
  const [body, setBody] = useState(""); // input 내용

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setBody("");
  };

  const dispatch = useDispatch();
  const onAddToDo = () => {
    if (title.length < 1 || body.length < 1) return;
    dispatch(addToDo([title, body]));
  };

  return (
    <div>
      <StForm onSubmit={onSubmit}>
        <StLabel>제목</StLabel>
        <StInput
          value={title}
          type="text"
          id="inputTitle"
          onChange={onChangeTitle}
          autoFocus
        />
        <StLabel>내용</StLabel>
        <StInput
          value={body}
          type="text"
          id="inputBody"
          onChange={onChangeBody}
        />
        <StBtn onClick={onAddToDo}>추가하기</StBtn>
      </StForm>
    </div>
  );
};

export default Form;
