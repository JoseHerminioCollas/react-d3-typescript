import * as d3 from 'd3';

const lineChart = ( data: any ) => {
  const margin = 30;
  const graphDimensions = { width: 300, height: 300 }
  const xS = d3.scaleLinear([0, data.length - 1],
    [0, graphDimensions.width]);
  const yS = d3.scaleLinear([0, 100],
    [graphDimensions.height, 0]);
  const xSA = d3.axisBottom(xS);
  const ySA = d3.axisLeft(yS);
  const line: any = d3.line((d, i) => xS(i), yS)

  const svg = d3.create('svg')
  const frame = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`)
  frame.append('rect')
    .attr('width', graphDimensions.width)
    .attr('height', graphDimensions.height)
    .attr('fill', 'blue')
  frame.append('g')
    .attr('transform', `translate(0,${graphDimensions.height})`)
    .call(xSA)
  frame.append('g')
    .call(ySA.ticks(10))
  frame.append('g')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', "10")
    .attr('d', line(data))

  return svg.node();
}

export default lineChart;
