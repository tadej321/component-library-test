"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Button() {
  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, "I am imported from an external component library");
}

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Button__Wrapper",
  componentId: "sc-vmh9hn-0"
})(["width:100px;height:50px;color:white;background:red;border:1px solid black;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:12px;"]);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Icon = function Icon(_ref) {
  var active = _ref.active,
      icon = _ref.icon,
      margin = _ref.margin,
      width = _ref.width,
      height = _ref.height,
      open = _ref.open,
      onClick = _ref.onClick,
      mobileWidth = _ref.mobileWidth,
      color = _ref.color;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      src = _useState2[0],
      setSrc = _useState2[1];

  Promise.resolve("./icons/".concat(icon, ".svg")).then(function (s) {
    return _interopRequireWildcard(require(s));
  }).then(function (obj) {
    console.log(obj);
    setSrc(obj["default"]);
  });
  return /*#__PURE__*/React.createElement(Svg, {
    color: color,
    onClick: onClick,
    open: open,
    width: width,
    height: height,
    margin: margin,
    active: active
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "".concat(src, "#").concat(icon)
  }));
};

exports.Icon = Icon;

var Svg = _styledComponents["default"].svg.withConfig({
  displayName: "Icon__Svg",
  componentId: "sc-59t7a4-0"
})(function (props) {
  return {
    margin: props.margin,
    width: props.width ? props.width : 15,
    minWidth: props.width ? props.width : 15,
    height: props.height ? props.height : 15,
    minHeight: props.height ? props.height : 15,
    transform: props.open ? "rotate(180deg)" : "rotate(0deg)",
    cursor: "pointer",
    stroke: props.color ? props.color : "currentColor",
    "@media (max-width: 650px)": {
      width: props.mobileWidth ? props.mobileWidth : props.width,
      minWidth: props.mobileWidth ? props.mobileWidth : props.width,
      height: props.mobileWidth ? props.mobileWidth : props.height,
      minHeight: props.mobileWidth ? props.mobileWidth : props.height
    }
  };
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require("./Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});

var _Icon = require("./Icon");

Object.keys(_Icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Icon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icon[key];
    }
  });
});

var _add = require("./icons/add.svg");

Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _add[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _add[key];
    }
  });
});

var _demo = require("./icons/demo.svg");

Object.keys(_demo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _demo[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _demo[key];
    }
  });
});
