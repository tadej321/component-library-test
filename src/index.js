import React from "react";
import styled from "styled-components";


export function Button () {
  return(
    <Wrapper>
      Hello
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50px;
  height: 30px;
  color: white;
  background: red;
  border: 1px solid black
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer 
`