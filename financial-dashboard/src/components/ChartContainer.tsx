import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

type chartDataType = {
  name: string;
  count: number;
};
interface ChartContainer {
  title: string;
  data: chartDataType[];
}

export default function ChartContainer({ title, data }: ChartContainer) {
  const chartItem = useRef<HTMLCanvasElement>(null);
  const chartinstance = useRef<Chart | null>(null);
  useEffect(() => {
    if (chartItem.current) {
      if (chartinstance.current) {
        chartinstance.current.destroy();
      }
      const ctx = chartItem.current.getContext("2d");
      if (ctx) {
        chartinstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((row) => row.name),
            datasets: [
              {
                label: title,
                data: data.map((row) => row.count),
                fill: true,
                tension: 0.5,
              },
            ],
          },
        });
      }
    }
  }, []);
  return (
    <div className="border border-white flex-1 mt-4 rounded-xl ">
      <canvas ref={chartItem}></canvas>
    </div>
  );
}
