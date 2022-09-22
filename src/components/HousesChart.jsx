import React from 'react';
import {Chart as ChartJS,LinearScale,LineElement,PointElement,Title,
 Tooltip} from "chart.js";
import { Scatter } from 'react-chartjs-2';

 ChartJS.register(LinearScale, PointElement, LineElement, Tooltip);

 export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "No of houses, the character are loyal to"
    }
  },
  scales: {
    x: {
      grid: {
        borderColor: 'grey',
       
      }
    },
    y: {
      
      grid: {
        borderColor: 'grey',
       
      }
    }
  }
};

export const HousesChart = ({currCharacter}) => {
    const Houses = [10,15,17,34,169,398,362,,380,229,271,285,340,378,379];
    const labels = Houses.map(house=>house)

    const data = {
        labels,
        datasets: [
          {
            
            data:Houses.map((id) => (currCharacter.allegiances.includes(`https://www.anapioficeandfire.com/api/houses/${id}`) ? 1 : null)),           
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor:"#fce290",
            pointRadius: 4,
            tension:0.2
          }
        ]
      };
  return (
    <div className='w-96'>
      <p className='text-lg my-4 text-center text-white'>No. of houses, the character are loyal to</p>
       <Scatter options={options} data={data} /> 
    </div>
  )
}
