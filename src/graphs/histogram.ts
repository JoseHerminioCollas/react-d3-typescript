import { create, bin, axisBottom, scaleLinear, max, axisLeft } from "d3";

const histogram = (data: any) => {
  const svg = create("svg");
  const graphDimensions = { width: 300, height: 300 };
  const bins: any = bin().thresholds(5)(data);
  const xS = scaleLinear(
    [bins[0].x0, bins[bins.length - 1].x1],
    [0, graphDimensions.width],
  );
  const maxBinLen = max(bins, (d: any) => d.length) as any;
  const yS = scaleLinear([0, maxBinLen], [graphDimensions.height, 0]);
  svg
    .append("g")
    .append("rect")
    .attr("width", graphDimensions.width)
    .attr("height", graphDimensions.height)
    .attr("fill", "green");
  svg
    .append("g")
    .attr("transform", `translate(0,${graphDimensions.height})`)
    .call(axisBottom(xS));
  svg.append("g").call(axisLeft(yS));
  svg
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
