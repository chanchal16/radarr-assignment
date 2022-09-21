import React from 'react';
import { Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,LineElement,PointElement,Title,
Tooltip} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title,PointElement, Tooltip);

export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Seasons, the characters were in the show"
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            if (value === 1) return "Present";
            if (value === 0) return "Absent";
          }
        }
      }
    }
};

export const SeasonChart = ({currCharacter}) => {
    const labels = [ "Season 1","Season 2", "Season 3", "Season 4", "Season 5", "Season 6"];
    const seasonsData = labels.map((lb) => (currCharacter.tvSeries.includes(lb) ? 1 : 0));

    const data = {
        labels,
        datasets: [
          {
            data: seasonsData,
            backgroundColor: "rgba(255, 99, 132, 0.5)"
          }
        ]
    };
  return (
    <div className='w-80'>
        <Line options={options} data={data} />
    </div>
  )
}
