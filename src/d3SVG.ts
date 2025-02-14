import { select } from 'd3';

const d3SVG = (svgRefCurrent: any, data: any) => {
  svgRefCurrent.innerHTML = "";
  const svg: any = select(svgRefCurrent)
  svg.append('rect')
    .attr('width', '200')
    .attr('height', '200')
    .attr('fill', 'red')
  svg.append('text')
    .attr('text-anchor', 'start')
    .attr('x', 100)
    .attr('y', 100)
    .text(data)
}

export default d3SVG;
