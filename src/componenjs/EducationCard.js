"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/educationCard.css");
var _uuid = require("uuid");
var EducationCard = function EducationCard(props) {
  var handleClick = function handleClick() {
    window.open("https://www.uniduna.hu", "_blank");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "edc-card"
  }, /*#__PURE__*/React.createElement("h3", null, " ", props.title, " "), /*#__PURE__*/React.createElement("h4", null, props.certificate, " | ", /*#__PURE__*/React.createElement("span", null, props.GPA)), /*#__PURE__*/React.createElement("ul", null, props.list.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: (0, _uuid.v4)()
    }, item);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, "Visit Website"));
};
var _default = EducationCard;
exports.default = _default;