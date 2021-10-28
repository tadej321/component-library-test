import React from "react";
import styled from "styled-components";
export function Button() {
  return (
    /*#__PURE__*/
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
    React.createElement(Wrapper, null, "Hello")
  );
}
const Wrapper = styled.div.withConfig({
  displayName: "src__Wrapper",
  componentId: "sc-znu9oj-0"
})(["width:100px;height:50px;color:white;background:red;border:1px solid black;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:12px;"]);
