import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
    if (props.item.length === 0) {
        return <div className='expenses-list__fallback'><h2>NO EXPENSE FOUND</h2></div>
    }
    return (
        <ul className='expenses-list'>
            {props.item.map((expenses) => <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}/>
            )
            }
        </ul>
    )


}

export default ExpenseList;