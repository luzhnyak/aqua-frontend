import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels:{
            color: '#407BFF',
        }
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

 
   
const WaterMonthChart = ({monthlyData, label}) =>{
    const labels = label;

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: monthlyData,
            borderColor: '#407BFF',
            backgroundColor: 'rgba(158, 187, 255, 1)',
            
          },
        ],
      };



    return <Line options={options} data={data} />;

}

export default WaterMonthChart