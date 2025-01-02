import React from "react";
import { Line } from "react-chartjs-2";
import * as S from "./Styles";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const TrendGraph: React.FC = () => {
  const labels = ["52.8", "51.5", "52.2", "52", "52.6"];

  const datasets = [
    {
      label: "체중",
      data: [52.8, 51.5, 52.2, 52, 52.6],
      unit: "kg",
    },
    {
      label: "골격근량",
      data: [20.4, 18.8, 19.5, 20, 20.1],
      unit: "kg",
    },
    {
      label: "체지방률",
      data: [41.3, 38.9, 39.8, 40.1, 40.2],
      unit: "%",
    },
  ];

  const getTrend = (data: number[]): { icon: string } => {
    const prevValue = data[data.length - 2];
    const currentValue = data[data.length - 1];

    if (currentValue > prevValue) {
      return { icon: "🔺" };
    } else if (currentValue < prevValue) {
      return { icon: "🔻" };
    }
    return { icon: "⚪" };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      // Custom plugin to draw values above the points
      afterDatasetsDraw: (chart: any) => {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
          const meta = chart.getDatasetMeta(datasetIndex);
          meta.data.forEach((point: any, index: number) => {
            const value = dataset.data[index];
            ctx.font = "12px Arial";
            ctx.fillStyle = index === dataset.data.length - 1 ? "#4caf50" : "#000"; // 마지막 점은 초록색
            ctx.textAlign = "center";
            ctx.fillText(value, point.x, point.y - 10); // 점수 위치 조정
          });
        });
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <S.Container>
      {datasets.map((dataset, index) => {
        const { icon } = getTrend(dataset.data);
        return (
          <S.TextCard key={index}>
            <S.TextLabel>{dataset.label}</S.TextLabel>
            <S.TextValue>
              {dataset.data[dataset.data.length - 1]}
              {dataset.unit} {icon}
            </S.TextValue>
          </S.TextCard>
        );
      })}

      <S.GraphCard>
        {datasets.map((dataset, index) => (
          <S.GraphSection key={index}>
            <S.GraphHeader>
              <S.GraphLabel>{dataset.label}</S.GraphLabel>
              <S.GraphValue>
                {dataset.data[dataset.data.length - 1]}
              </S.GraphValue>
            </S.GraphHeader>
            <S.GraphWrapper>
              <Line
                data={{
                  labels,
                  datasets: [
                    {
                      label: dataset.label,
                      data: dataset.data,
                      borderColor: "#8D8D8D",
                      backgroundColor: "transparent",
                      pointRadius: labels.map((_, i) => (i === labels.length - 1 ? 6 : 4)), // 마지막 점은 더 큼
                      pointBackgroundColor: labels.map((_, i) =>
                        i === labels.length - 1 ? "#4caf50" : "#8D8D8D"
                      ), // 마지막 점만 초록색
                      tension: 0.4,
                    },
                  ],
                }}
                options={options}
              />
            </S.GraphWrapper>
          </S.GraphSection>
        ))}
      </S.GraphCard>
    </S.Container>
  );
};

export default TrendGraph;
