import React from 'react'
import { Bar } from "react-chartjs-2";
//import { Chart } from 'chart.js/auto';

import { Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js';
Chart.register(
    LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nav','Dec'];
const lab =[2,3,4,5,6]
const options = {
    plugins:{
        legend:{
           position:'top'
        },
        title:{
            display:true,
            text:"Expense Tracker"
        }
    }
}

const data = {
    labels,
    lab,
    datasets:[
        {
            label:'2020 Expense',
            data:[1000,2000,2020,4141,1115,1116,1117,1118,1119,11110,1111,1212],
            backgroundColor:'red'

        },
        {
            label:'2021 Expense',
            data:[20000,800,17000,19000,8329,1008,9112,2003,13423,4434,9543,9090],
            backgroundColor:'orange'
        }
    ]

}
function ChartOne() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default ChartOne
