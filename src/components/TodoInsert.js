import React from 'react'
import styled from 'styled-components'

const TodoInsert = () => {
  return (
    <InsertWrapper>
      <InsertItem placeholder="적어주세요" type="text"/>
      <AddButton>추가</AddButton>
    </InsertWrapper>
  )
}

const InsertWrapper = styled.article`
  padding-top: 40px;
  justify-content: space-between;
`
const InsertItem = styled.input`
  border: 0px solid red;
  border-bottom: 2px solid #000;
  background-color: rgba(0,0,0,0);
  height: 40px;
  font-size: 18px;
  font-weight: bolder;
  color: #fff;
`
const AddButton = styled.button`
  width: 80px;
  height: 40px;
  border: 0px solid red;
  font-size: 18px;
`;

export default TodoInsert
