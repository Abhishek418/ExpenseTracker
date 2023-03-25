import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
    const [showForm, setShowForm] = React.useState(false);
    const toggleShowForm = () => {
        setShowForm((prevValue) => !prevValue);
    };
    const onFormSaveHandler = (expense) => {
        const newExpense = { ...expense, id: Math.random().toString(), date: new Date(expense.date) };
        props.onAddExpense(newExpense);
        toggleShowForm();
    };
    let formContent = <button onClick={toggleShowForm}>Add New Expense</button>;
    if (showForm) {
        formContent = <ExpenseForm onFormSave={onFormSaveHandler} onCancelClick={toggleShowForm} />;
    }
    return <div className="new-expense">{formContent}</div>;
}
