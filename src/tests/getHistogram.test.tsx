import React from "react";
import { render, screen } from "@testing-library/react";
import histogram from "../histogram";

describe("getHistogram", () => {
  test("should return an element", () => {
    const element = histogram([1, 2, 3]);
    expect(element).toBeDefined();
  });
});
