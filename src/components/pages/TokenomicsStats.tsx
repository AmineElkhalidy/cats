import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {},
  },
};

export default function TokenomicsStats() {
  return (
    <div className="w-full relative">
      <Doughnut
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: {
                  family: "Poppins",
                },
              },
            },
          },
        }}
      />

      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins text-white text-center">
        <span className="font-semibold text-[36px] sm:text-[48px] leading-[1.5]">
          Total
        </span>
        <br />
        <span className="text-[24px] sm:text-[36px] leading-[1.5]">
          66 Billion
        </span>
      </p>
    </div>
  );
}
