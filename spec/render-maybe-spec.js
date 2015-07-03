import React from "react";
import { renderMaybe, Empty } from "../src/render-maybe.js";

const div = React.renderToStaticMarkup(<div></div>);
const empty = React.renderToStaticMarkup(<Empty />);

function setup(data) {
  const component = React.createElement("div");
  return React.renderToStaticMarkup(renderMaybe(data, component));
}

describe("render-maybe", function() {
  describe("for arrays", function() {
    it("renders the component if data is not empty", function() {
      const output = setup([1]);
      expect(output).toBe(div);
    });

    it("does not render the component if data is empty", function() {
      const output = setup([]);
      expect(output).toBe(empty);
    });
  });

  describe("for objects", function() {
    it("renders the component if data is not empty", function() {
      const output = setup({ prop: 1 });
      expect(output).toBe(div);
    });

    it("does not render the component if data is empty", function() {
      const output = setup({ prop: undefined });
      expect(output).toBe(empty);
    });
  });

  describe("for booleans", function() {
    it("renders the component if data is true", function() {
      const output = setup(true);
      expect(output).toBe(div);
    });

    it("does not render the component if data is false", function() {
      const output = setup(false);
      expect(output).toBe(empty);
    });
  });

  describe("for other primitives", function() {
    it("renders the component if data is a number", function() {
      const output = setup(0);
      expect(output).toBe(div);
    });

    it("renders the component if data is a non empty string", function() {
      const output = setup("a");
      expect(output).toBe(div);
    });

    it("does not render the component if data is undefined", function() {
      const output = setup(undefined);
      expect(output).toBe(empty);
    });

    it("does not render the component if data is empty string", function() {
      const output = setup("");
      expect(output).toBe(empty);
    });
  });

  describe("for functions", function() {
    it("renders the component if the function returns true", function () {
      const output = setup(function() { return true; });
      expect(output).toBe(div);
    });

    it("does not render the component if the function returns false", function () {
      const output = setup(function() { return false; });
      expect(output).toBe(empty);
    });
  });
});
