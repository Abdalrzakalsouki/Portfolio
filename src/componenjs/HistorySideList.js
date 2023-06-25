"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/historyList.css");
var HistorySideList = function HistorySideList(props) {
  var handleActiveElement = function handleActiveElement(index) {
    props.onActiveChange(index);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "historyList"
  }, props.titles.map(function (title, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: props.currentIndex === index ? "active-element" : "",
      onClick: function onClick() {
        return handleActiveElement(index);
      }
    }, title);
  })));
};
var _default = HistorySideList;
exports.default = _default;