import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: "top",
      labels: {
        color: "#407BFF",
      },
    },
    title: {
      display: true,
      text: "Statistic",
    },
  },
};

interface IProps {
  monthlyData: number[];
  label: number[];
}

const WaterMonthChart: FC<IProps> = ({ monthlyData, label }) => {
  const labels = label;
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: monthlyData,
        borderColor: "#407BFF",
        backgroundColor: "rgba(158, 187, 255, 1)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default WaterMonthChart;
