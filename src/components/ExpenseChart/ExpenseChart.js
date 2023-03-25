import React from "react";
import "./expenseChart.css";
import ChartBar from "./ChartBar";

const ExpenseChart = (props) => {
    const values = props.items.map((item) => {
        return item.amount;
    });
    const maxValue = Math.max(...values);

    const chartBarData = [
        { label: "Jan", height: "0%", value: 0 },
        { label: "Feb", height: "0%", value: 0 },
        { label: "Mar", height: "0%", value: 0 },
        { label: "Apr", height: "0%", value: 0 },
        { label: "May", height: "0%", value: 0 },
        { label: "Jun", height: "0%", value: 0 },
        { label: "Jul", height: "0%", value: 0 },
        { label: "Aug", height: "0%", value: 0 },
        { label: "Sep", height: "0%", value: 0 },
        { label: "Oct", height: "0%", value: 0 },
        { label: "Nov", height: "0%", value: 0 },
        { label: "Dec", height: "0%", value: 0 },
    ];

    /*setting value */
    props.items.forEach((item) => {
        chartBarData[item.date.getMonth()].value += +item.amount;
    });
    console.log(chartBarData);
    /* setting height */
    chartBarData.forEach((item) => {
        item.height = Math.round((item.value / maxValue) * 100) + "%";
    });
    const chartBars = chartBarData.map((item, index) => {
        return <ChartBar height={item.height} label={item.label} key={index} />;
    });
    return <div className="chart">{chartBars}</div>;
};

export default ExpenseChart;
