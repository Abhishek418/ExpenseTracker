import React from "react";
import Card from "../UI/Card";
import "./expenses.css";
import ExpenseFilter from "../ExpenseFilter.js/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
export default function Expenses(props) {
    const [selectedFilter, setSelectedFilter] = React.useState("2023");
    const onSelectFilterHandler = (selectedOption) => {
        setSelectedFilter(selectedOption);
    };
    const filteredArray = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onSelectFilter={onSelectFilterHandler} selected={selectedFilter} />
                {filteredArray.length > 0 && <ExpenseChart items={filteredArray} />}
                <ExpenseList items={filteredArray} />
            </Card>
        </div>
    );
}
