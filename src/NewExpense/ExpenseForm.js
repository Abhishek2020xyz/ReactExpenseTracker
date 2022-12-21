import React from "react";

import './ExpenseForm.css';
const ExpenseForm = () =>{
    const titleChangeHandler = (event)=>{
        console.log(event.target.value);
    }
return (
<form>
    <div className="new-expense__controls">
    <div className="new-expense__controls">
    <label>Title</label>
    <input type='text' onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__controls">
    <label>Amount</label>
    <input type='number' />
    </div>
    <div className="new-expense__controls">
    <label>Date</label>
    <input type='date' min="01-10-2019" max="31-12-2022"/>
    </div>
        
    </div>
    <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
    </div>
</form>
);
}
export default ExpenseForm;