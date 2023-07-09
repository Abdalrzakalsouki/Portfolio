"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/showCase.css");
function ShowCase(props) {
  var handleProject = function handleProject() {
    window.open(props.url, "_blank");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "container-sc"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: handleProject
  }, /*#__PURE__*/React.createElement("h3", null, props.title), /*#__PURE__*/React.createElement("img", {
    src: props.ImgSrc,
    alt: "Project image"
  }), /*#__PURE__*/React.createElement("p", null, props.descriptipon), /*#__PURE__*/React.createElement("p", null, props.tools)));
}
var _default = ShowCase;
exports.default = _default;