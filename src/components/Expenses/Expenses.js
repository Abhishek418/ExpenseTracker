import React from "react";
import Card from "../UI/Card";
import "./expenses.css";
import ExpenseFilter from "../ExpenseFilter.js/ExpenseFilter";
import ExpenseList from "./ExpenseList";
export default function Expenses(props) {
    const [selectedFilter, setSelectedFilter] = React.useState();
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
                <ExpenseList items={filteredArray} />
            </Card>
        </div>
    );
}
