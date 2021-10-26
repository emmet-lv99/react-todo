import React from 'react'
import styled from 'styled-components'

const TodoItem = () => {
  return (
    <CheckItem>
      <input id="chk" type="checkbox"/>
      <ItemLabel htmlFor="chk">fff</ItemLabel>
      <CheckItemDel>삭제</CheckItemDel>
    </CheckItem>
  )
}

const CheckItem = styled.article`
  position: relative;
  height: 60px;
  border-bottom: 1px solid #fff;
  line-height: 60px;
`;
const CheckItemDel = styled.span`
  position: absolute;
  right: 0;
  color: red;
`;
const ItemLabel = styled.label`
  color: #fff;
  padding-left: 10px;
`;
export default TodoItem
