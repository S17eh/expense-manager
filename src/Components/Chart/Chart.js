import './Chart.css'
import React from "react";
import ChartBar from './ChartBar'

function Chart(props) {
    const dataPointsValues = props.datapoints.map(datapoint => datapoint.value)
    const totalMax = Math.max(...dataPointsValues)
    return (
        <div className='chart'>
            {props.datapoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    lable={dataPoint.label}/>
            ))}
        </div>
    )
}

export default Chart;