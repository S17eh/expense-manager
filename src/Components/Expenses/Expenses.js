import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpeneseChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');
    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }//selectedYear(Just a name here) is selected at Dropdown and stored by target and flowed by prop
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });//.filter is in-built method, here with filteredYear(which is set to selectedYear)


    return (
        <Card className="expenses">
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={FilterChangeHandler}/>
            <ExpenseList item={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;