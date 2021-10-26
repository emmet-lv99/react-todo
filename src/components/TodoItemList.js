import React from 'react'
import styled from 'styled-components'
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  return (
    <ItemWrapper>
      <TodoItem />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.article`
  padding-top: 40px;
`;

export default TodoItemList
