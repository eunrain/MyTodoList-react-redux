import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <StHeader>
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
};

export default Header;
