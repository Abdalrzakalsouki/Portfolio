"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/experienceCard.css");
var ExperienceCard = function ExperienceCard(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "experience-sub-card"
  }, /*#__PURE__*/React.createElement("h4", null, props.title, ", ", /*#__PURE__*/React.createElement("span", null, props.company)), /*#__PURE__*/React.createElement("p", null, props.date), /*#__PURE__*/React.createElement("ul", null, props.lists.map(function (item) {
    return /*#__PURE__*/React.createElement("li", null, item);
  })));
};
var _default = ExperienceCard;
exports.default = _default;