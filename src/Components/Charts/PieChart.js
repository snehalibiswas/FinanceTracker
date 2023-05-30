import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <div className="chart-container">
            <h2 className="chart-heading" style={{ textAlign: "center", fontFamily: "Inter" }}>Category-wise Expense</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Expense made"
                        }
                    }
                }}
            />
        </div>
    );
}
export default PieChart;