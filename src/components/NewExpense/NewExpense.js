import { useState} from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = prop => {
	const [newExpenseOpened, setNewExpenseOpened] = useState(false)

	const onSaveExpenseDataHandler = enteredExpenseData => {
		const expenseData = { id: Math.random().toString(), ...enteredExpenseData }
		prop.onAddExpense(expenseData)
		closeNewExpenseHandler()
	}

	const openNewExpenseHandler = () => {
		setNewExpenseOpened(true)
	}
	const closeNewExpenseHandler = () => {
		setNewExpenseOpened(false)
	}



	return (
		<div className='new-expense'>
			{newExpenseOpened ? 
			<NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={closeNewExpenseHandler} /> : 
			<button onClick={openNewExpenseHandler}>Add New Expense</button>}
		</div>
	)
}

export default NewExpense
