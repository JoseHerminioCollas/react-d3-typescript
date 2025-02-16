import React from "react";
import { render, screen } from "@testing-library/react";
import d3SVG from "../src/d3SVG";

describe("getHistogram", () => {
  test("should return an element", () => {
    const element = d3SVG();
    expect(element).toBeDefined();
  });
});
