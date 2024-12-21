import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { FluxContext } from "../stores/FluxContext";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TrendGraph: React.FC = () => {
  const context = useContext(FluxContext);

  if (!context) {
    throw new Error("FluxContext must be used within a FluxProvider");
  }

  const { state } = context;

  const data = {
    labels: ["Point 1", "Point 2", "Point 3", "Point 4"],
    datasets: [
      {
        label: "Metabolic Rate",
        data: state.metabolicRate.history,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        yAxisID: "y1",
        tension: 0.4,
      },
      {
        label: "Weight",
        data: state.weight.history,
        borderColor: "#f44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        yAxisID: "y2",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Trends Over Time",
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}${label === "Weight" ? " kg" : " kcal"}`;
          },
        },
      },
    },
    scales: {
      y1: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "Metabolic Rate",
        },
        min: 1100,
        max: 1200,
      },
      y2: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "Weight",
        },
        min: 50,
        max: 55,
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        type: "category" as const,
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TrendGraph;
