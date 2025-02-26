import React from "react";
import { Line } from "react-chartjs-2";
import * as S from "./Styles";
import { useWeightHistory } from "../../react-query/query/useAvatarQuery";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

interface TrendGraphProps {
  memberId: number;
}

const TrendGraph: React.FC<TrendGraphProps> = ({ memberId }) => {
  const { data, isLoading, isError } = useWeightHistory(memberId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>체중 기록 정보를 불러오는 중 오류가 발생했습니다.</div>;

  const labels = ["1주 전", "6일 전", "5일 전", "4일 전", "최근"];

  const weights = data.map((item) => item.weight);
  const muscles = data.map((item) => item.muscle);
  const bodyFats = data.map((item) => item.bodyFat);

  const datasets = [
    {
      label: "체중",
      data: weights,
      unit: "kg",
    },
    {
      label: "골격근량",
      data: muscles,
      unit: "kg",
    },
    {
      label: "체지방률",
      data: bodyFats,
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
      afterDatasetsDraw: (chart: any) => {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
          const meta = chart.getDatasetMeta(datasetIndex);
          meta.data.forEach((point: any, index: number) => {
            const value = dataset.data[index];
            ctx.font = "12px Arial";
            ctx.fillStyle = index === dataset.data.length - 1 ? "#4caf50" : "#000";
            ctx.textAlign = "center";
            ctx.fillText(value, point.x, point.y - 10);
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
                      pointRadius: labels.map((_, i) => (i === labels.length - 1 ? 6 : 4)),
                      pointBackgroundColor: labels.map((_, i) =>
                        i === labels.length - 1 ? "#4caf50" : "#8D8D8D"
                      ),
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
