import React from "react";
import { render, screen } from "@testing-library/react";
import getHistogram from "../src/getHistogram";

describe("getHistogram", () => {
  test("should return an element", () => {
    const element = getHistogram([1, 2, 3]);
    expect(element).toBeDefined();
  });
});
