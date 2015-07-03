"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _empty = require("./empty");

var _empty2 = _interopRequireDefault(_empty);

var _lodashArrayCompact = require("lodash/array/compact");

var _lodashArrayCompact2 = _interopRequireDefault(_lodashArrayCompact);

var _lodashObjectValues = require("lodash/object/values");

var _lodashObjectValues2 = _interopRequireDefault(_lodashObjectValues);

function checkIfEmpty(data) {
  var type = typeof data;

  if (Array.isArray(data)) {
    return (0, _lodashArrayCompact2["default"])(data).length === 0;
  } else if (type === "object") {
    return (0, _lodashArrayCompact2["default"])((0, _lodashObjectValues2["default"])(data)).length === 0;
  } else if (type === "boolean") {
    return !data;
  } else if (type === "function") {
    return !data();
  } else {
    return false;
  }
}

exports["default"] = {
  renderMaybe: function renderMaybe(data, component) {
    var isDefined = typeof data === "number" || typeof data === "boolean" || !!data;
    var isEmpty = isDefined && checkIfEmpty(data);

    if (!isDefined || isEmpty) {
      return _react2["default"].createElement(_empty2["default"]);
    } else {
      return component;
    }
  },

  Empty: _empty2["default"]
};
module.exports = exports["default"];