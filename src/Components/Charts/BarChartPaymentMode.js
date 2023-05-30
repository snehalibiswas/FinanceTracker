import React from 'react'
import { Bar } from "react-chartjs-2";

function BarChartPaymentMode({ chartData }) {
    return (
        <div className="chart-container">
            <h2 className="chart-heading" style={{ textAlign: "center", fontFamily: "Inter" }}>Payment Mode</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Expenses Made"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default BarChartPaymentMode