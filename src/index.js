import React from "react";
import styled from "styled-components";


export function Button () {
  return(
    // <div style={
    //   {
    //     width: "100px",
    //     height: "50px",
    //     color: "white",
    //     background: "red",
    //     border: "1px solid black",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     cursor: "pointer",
    //     textAlign: "center",
    //     fontSize: "12px",
    //   }
    // }>
    //   Hello
    // </div>
    <Wrapper>
      Hello
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100px;
  height: 50px;
  color: white;
  background: red;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
`