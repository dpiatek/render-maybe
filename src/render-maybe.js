import React from "react";
import Empty from "./empty";
import compact from "lodash/array/compact";
import values from "lodash/object/values";

function checkIfEmpty(data) {
  const type = typeof data;

  if (Array.isArray(data)) {
    return compact(data).length === 0;
  } else if (type === "object") {
    return compact(values(data)).length === 0;
  } else if (type === "boolean") {
    return !data;
  } else if (type === "function") {
    return !data();
  } else {
    return false;
  }
}

export default {
  renderMaybe(data, component) {
    const isDefined = typeof data === "number" || typeof data === "boolean" || !!data;
    const isEmpty = isDefined && checkIfEmpty(data);

    if (!isDefined || isEmpty) {
      return React.createElement(Empty);
    } else {
      return component;
    }
  },

  Empty: Empty
};
