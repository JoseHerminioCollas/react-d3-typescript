import { create } from "d3";

const d3SVG = () => {
  const svg = create("svg");
  svg
    .append("rect")
    .attr("width", "200")
    .attr("height", "200")
    .attr("fill", "red");
  svg
    .append("text")
    .attr("text-anchor", "start")
    .attr("x", 100)
    .attr("y", 100)
    .text(data);
  return svg.node();
};

export default d3SVG;
