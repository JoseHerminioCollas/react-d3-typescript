import { create, bin, axisBottom, scaleLinear, max, axisLeft } from "d3";
// Define the type using D3 types
/*
type Bin = {
  x0: number;
  x1: number;
  length: number;
};

const bins: Bin[] = [
  { x0: 0, x1: 10, length: 5 },
  { x0: 10, x1: 20, length: 15 },
  { x0: 20, x1: 30, length: 25 },
];
*/
const histogram = (data: any) => {
  const margin = 30;
  const svg = create("svg");
  const graphDimensions = { width: 300, height: 300 };
  const bins: any = bin().thresholds(5)(data);
  const xS = scaleLinear(
    [bins[0].x0, bins[bins.length - 1].x1],
    [0, graphDimensions.width],
  );
  const maxBinLen = max(bins, (d: any) => d.length) as any;
  const yS = scaleLinear([0, maxBinLen], [graphDimensions.height, 0]);
  const frame = svg
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);
  frame
    .append("rect")
    .attr("width", graphDimensions.width)
    .attr("height", graphDimensions.height)
    .attr("fill", "blue");
  frame
    .append("g")
    .attr("transform", `translate(0,${graphDimensions.height})`)
    .call(axisBottom(xS));
  frame.append("g").call(axisLeft(yS));
  frame
    .append("g")
    .attr("fill", "red")
    .selectAll()
    .data(bins)
    .join("rect")
    .attr("x", (d: any) => xS(d.x0))
    .attr("width", (d: any) => xS(d.x1) - xS(d.x0))
    .attr("y", (d: any) => yS(d.length))
    .attr("height", (d: any) => yS(0) - yS(d.length));

  return svg.node();
};

export default histogram;
