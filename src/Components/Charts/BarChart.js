import React from "react";
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
    React.useEffect(() => {
        console.log(chartData.datasets[0].data);
    },[])
    return (
        <div className="chart-container">
            <h2 className="chart-heading" style={{ textAlign: "center", fontFamily: "Inter" }}>Category Wise Expense</h2>
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
    );
};