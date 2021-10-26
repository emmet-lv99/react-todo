import React from "react";
import styled from "styled-components"

const TodoTitle = (props) => {
  return (
    <Title>{props.title}</Title>
  )
}

const Title = styled.h1`
  color: #ffffff;
`;

export default TodoTitle
