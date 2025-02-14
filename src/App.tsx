import React, { useEffect, useRef, useState } from "react";
import lineChart from "./lineChart";
// import getHistogram from './getHistogram';

const initData = [0, 1, 1, 1, 1, 20, 2, 90, 4, 6, 4, 4, 60, 100];
const svgDimensions = { width: 360, height: 360 };
const App: React.FC = () => {
  const svgRef = useRef<any>(null);
  const intervalID = useRef<any>(null);
  const [data, setData] = useState(initData);
  const [animationOn, setAnimationON] = useState<boolean>(true);

  useEffect(() => {
    svgRef.current.innerHTML = "";
    svgRef.current.appendChild(lineChart(data));
  }, [data]);

  useEffect(() => {
    if (!animationOn) {
      clearTimeout(intervalID.current);
    } else {
      intervalID.current = setInterval(() => {
        const newData = data.map((d) => {
          return d + Math.floor(Math.random() * 3 - 3);
        });
        setData(newData);
      }, 3000);
    }

    return () => clearTimeout(intervalID.current);
  }, [animationOn]);

  return (
    <div>
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <rect x={0} y={0} fill="gray" width="100%" height="100%" />
        <g ref={svgRef}></g>
      </svg>
      <section>
         Animate 
        {!animationOn && (
          <button onClick={() => setAnimationON(true)}>ON</button>
        )}
        {animationOn && (
          <button onClick={() => setAnimationON(false)}>OFF</button>
        )}
      </section>
    </div>
  );
};

export default App;
