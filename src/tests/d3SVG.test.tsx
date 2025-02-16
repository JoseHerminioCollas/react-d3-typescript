import d3SVG from "@graphs/d3SVG";

describe("getHistogram", () => {
  test("should return an element", () => {
    const element = d3SVG();
    expect(element).toBeDefined();
  });
});
