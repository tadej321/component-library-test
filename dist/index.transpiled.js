"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Button() {
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
    _react["default"].createElement(Wrapper, null, "I am imported from an external component library")
  );
}

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "src__Wrapper",
  componentId: "sc-znu9oj-0"
})(["width:100px;height:50px;color:white;background:red;border:1px solid black;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:12px;"]);
