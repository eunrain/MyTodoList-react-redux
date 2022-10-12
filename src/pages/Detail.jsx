import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const StBox = styled.div`
  border: 2px solid #ebefed;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 20px;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 200px 15px;
`;

const StBtn = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 15px;
  border: none;
`;

const Detail = () => {
  const {
    state: { todo },
  } = useLocation();
  const navigate = useNavigate();

  return (
    <StContainer>
      <StBox>
        <StHeader>
          <div>ID : {todo.id}</div>
          <StBtn
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </StBtn>
        </StHeader>

        <StContent>
          <h1>{todo.title}</h1>
          <div>{todo.body}</div>
        </StContent>
      </StBox>
    </StContainer>
  );
};

export default Detail;
