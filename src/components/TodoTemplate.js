import React from 'react'
import styled from 'styled-components'
import TodoTitle from "./TodoTitle";
import TodoItemList from "./TodoItemList";
import TodoInsert from "./TodoInsert";


const TodoTemplate = () => {
  return (
    <Wrapper>
      <TodoTitle title={'THIS IS TODO LIST'} />
      <TodoInsert/>
      <TodoItemList/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export default TodoTemplate
