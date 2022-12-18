import { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesContent from './ExpensesContent'
import ExpensesChart from './ExpensesChart'

const ExpenseExpenses = props => {
	const [filteredYear, setFilteredYear] = useState('2021')

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
	}

	const filteredByYearItems = props.items.filter(item => {
		return item.date.getFullYear().toString() === filteredYear
	})

		return (
			<Card className='expenses'>
				<ExpensesFilter selectedFilter={filteredYear} onYearSelection={filterChangeHandler} />
				<ExpensesChart expenses={filteredByYearItems} />
				<ExpensesContent items={filteredByYearItems}/>
			</Card>
		)
}

export default ExpenseExpenses
