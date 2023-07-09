"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/experienceCard.css");
var _uuid = require("uuid");
var ExperienceCard = function ExperienceCard(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-sub-card"
  }, /*#__PURE__*/React.createElement("h3", null, props.title, ", ", /*#__PURE__*/React.createElement("span", null, props.company)), /*#__PURE__*/React.createElement("p", null, props.date), /*#__PURE__*/React.createElement("ul", null, props.lists.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: (0, _uuid.v4)()
    }, item);
  })));
};
var _default = ExperienceCard;
exports.default = _default;