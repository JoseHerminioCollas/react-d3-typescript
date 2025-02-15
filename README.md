# React d3

The purpose of this repository is to establish strategies that can be used while working with D3.js in the context of React.

Issues addressed:

 * React and D3 both manipulate the DOM. These conflicting DOM strategies have to be avoided.

 * Techniques for updating the D3 graph to create an animated graph.

In the D3 documentation, it lays out clearly how to use the <code>useRef</code> hook to store the code generated from D3.

The following code summarizes the strategy demonstrated in the D3 documentation. It creates a red square. The D3 select function is passed the instance of the variable created by the React useRef hook.


```
import React, { useRef, useEffect } from "react";
import { select } from "d3";

const App = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current)
    svg.append('rect')
      .attr('width', '300')
      .attr('height', '300')
      .attr('fill', 'red')
  }, [])

  return (
    <svg ref={svgRef} width="300" height="300">
    </svg>
  )
}

export default App;
```

Another strategy is to use a React useRef in an SVG element.
Get an SVG node from a function that builds the D3 SVG.
Set the SVG React useRef variable with appendChild.
The following code demonstrates this technique. The example displays a red square.

```
import React, { useEffect, useRef } from 'react';
import { create } from 'd3';

const redSqare = () => {
  const svg = create('svg')
  svg.append('g')
    .append('rect')
    .attr('width', "300")
    .attr('height', "300")
    .attr('fill', 'red')

  return svg.node();
}

const App = () => {
  const svgRef = useRef(null);  
  useEffect(() => {
    if (svgRef.current) {
       svgRef.current.appendChild(redSqare());
    }
  }, [])

  return (
    <svg width="300" height="300">
      <g ref={svgRef}></g>
    </svg>
  );
};

export default App;

```