import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);
    const StartEditingHandler = () => {
        setIsEditing(true);

    }
    const StopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={StartEditingHandler}>Add Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={StopEditingHandler}
                    onSaveExpense={saveExpenseDataHandler}/>
            )}
        </div>
    )
}

export default NewExpense;