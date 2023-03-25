import React from "react";
import Card from "../UI/Card";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter.js/ExpenseFilter";
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
                {filteredArray.map((expense) => (
                    <ExpenseItem date={expense.date} price={expense.amount} title={expense.title} key={expense.id} />
                ))}
            </Card>
        </div>
    );
}
