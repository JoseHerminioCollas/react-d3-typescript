import histogram from "@graphs/histogram";

describe("getHistogram", () => {
  test("should return an element", () => {
    const element = histogram([1, 2, 3]);
    expect(element).toBeDefined();
  });
});
