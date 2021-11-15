'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function Button() {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, null, "I am imported from an external component library");
}
var Wrapper = styled__default["default"].div.withConfig({
  displayName: "Button__Wrapper",
  componentId: "sc-vmh9hn-0"
})(["width:100px;height:50px;color:white;background:red;border:1px solid black;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:12px;"]);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Icon = function Icon(_ref) {
  var active = _ref.active,
      icon = _ref.icon,
      margin = _ref.margin,
      width = _ref.width,
      height = _ref.height,
      open = _ref.open,
      onClick = _ref.onClick;
      _ref.mobileWidth;
      var color = _ref.color;

  var _useState = React$1.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      src = _useState2[0],
      setSrc = _useState2[1];

  (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })("./icons/".concat(icon, ".svg")).then(function (obj) {
    console.log(obj);
    setSrc(obj["default"].src);
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
var Svg = styled__default["default"].svg.withConfig({
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

exports.Button = Button;
exports.Icon = Icon;
