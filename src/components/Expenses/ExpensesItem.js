import Card from '../UI/Card'
import './ExpensesItem.css'
import ExpenseDate from './ExpensesDate'

const ExpenseItem = props => {

	return (
		<li>
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<p className='expense-item__price'>${props.amount}</p>
			</div>
		</Card>
		</li>
	)
}

export default ExpenseItem
