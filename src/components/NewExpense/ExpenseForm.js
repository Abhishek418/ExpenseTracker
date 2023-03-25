import React from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const initialState = {
        title: "",
        amount: "",
        date: "",
    };
    const [expenseForm, setExpenseForm] = React.useState(initialState);

    const titleChangeHandler = (event) => {
        setExpenseForm((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setExpenseForm((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setExpenseForm((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onFormSave(expenseForm);
        setExpenseForm(initialState);
    };
    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" name="title" onChange={titleChangeHandler} value={expenseForm.title} />
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" name="amount" onChange={amountChangeHandler} value={expenseForm.amount} />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" name="date" onChange={dateChangeHandler} value={expenseForm.date} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button
                        onClick={() => {
                            props.onCancelClick();
                        }}
                    >
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
}
