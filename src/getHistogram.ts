import * as d3 from 'd3';

const getHistogram = (data: any) => {
  const svg = d3.create('svg');
  const graphDimensions = { width: 300, height: 300 }
  const bins: any = d3.bin().thresholds(5)(data)
  const xS = d3.scaleLinear(
    [bins[0].x0, bins[bins.length - 1].x1],
    [0, graphDimensions.width]
  )
  const yS = d3.scaleLinear(
    ([0, d3.max(bins) as any]),
    [graphDimensions.height, 0])
  svg.append('g')
    .append('rect')
    .attr('width', graphDimensions.width)
    .attr('height', graphDimensions.height)
    .attr('fill', 'green')
  svg.append('g')
    .attr('transform', `translate(0,${graphDimensions.height})`)
    .call(d3.axisBottom(xS))
  svg.append('g')
    .call(d3.axisLeft(yS))
  svg.append('g')
    .attr('fill', 'red')
    .selectAll()
    .data(bins)
    .join('rect')
    .attr('x', (d: any) => xS(d.x0))
    .attr('width', (d: any) => xS(d.x1) - xS(d.x0))
    .attr('y', (d: any) => yS(d.length))
    .attr('height', (d: any) => yS(0) - yS(d.length))

  return svg.node();
}

export default getHistogram;
