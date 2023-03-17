import React from "react";
import "../css/expenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>Insurance</h2>
        <div className="expense-item__price">200$</div>
      </div>
    </div>
  );
}
