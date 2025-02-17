import React, { useEffect, useRef, useState } from "react";
import lineChart from "@graphs/lineChart";
import AnimateControl from "@components/AnimateControl";
import histogram from "@graphs/histogram";
import "@styles/App.css";

const initData = [0, 1, 1, 1, 1, 20, 2, 90, 4, 6, 4, 4, 60, 100];
const svgDimensions = { width: 360, height: 360 };
type chartTypes = "line" | "histogram";
const App: React.FC = () => {
  const svgRef = useRef<any>(null);
  const intervalID = useRef<any>(null);
  const [data, setData] = useState(initData);
  const [animationOn, setAnimationOn] = useState<boolean>(false);
  const [chartType, setChartType] = useState<chartTypes>("histogram");

  useEffect(() => {
    svgRef.current.innerHTML = "";
    let chartNode;
    if (chartType === "line") {
      chartNode = lineChart(data);
    } else {
      chartNode = histogram(data);
    }
    svgRef.current.appendChild(chartNode);
  }, [data, chartType]);

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

  const handleChange = ({ target }: any) => {
    setChartType(target.name);
  };

  return (
    <div id="appFrame">
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <rect x={0} y={0} fill="gray" width="100%" height="100%" />
        <g ref={svgRef}></g>
      </svg>
      <section>
        <label>
          <h2>Chart Type</h2>
          Line
          <input
            type="checkbox"
            name="line"
            checked={chartType === "line"}
            onChange={handleChange}
          />
          Histogram
          <input
            type="checkbox"
            name="histogram"
            checked={chartType === "histogram"}
            onChange={handleChange}
          />
        </label>
         </section>
        <AnimateControl
          animationOn={animationOn}
          setAnimationOn={setAnimationOn}
        />
    </div>
  );
};

export default App;
