import './ExpensesDate.css'

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const day = props.date.toLocaleString('en-EN', { day: '2-digit' })
	const year = props.date.toLocaleString('en-EN', { year: 'numeric' })

	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	)
}

export default ExpenseDate;
