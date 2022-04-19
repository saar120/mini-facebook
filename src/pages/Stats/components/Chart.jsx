import React from "react";
import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import COLORS from "../../../constants/colors";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart({ likesPerDay }) {
  const dataSets = [
    {
      label: "Likes per day",
      data: likesPerDay.map((day) => day.likes),
      backgroundColor: COLORS.PRIMARY_LIGHT,
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
    },
  ];

  return (
    <Bar
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      }}
      data={{
        labels: likesPerDay.map((day) => day.date),
        datasets: dataSets,
      }}
    />
  );
}

Chart.propTypes = {
  likesPerDay: PropTypes.array,
};

export default Chart;
