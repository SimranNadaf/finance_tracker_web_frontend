import Modal from '../modal';
import '../addExpIn.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../data_state/expense';
import { updateExpense } from '../../data_state/expense';
import { v4 } from 'uuid';

const ExpenseModal = ({isExpenseOpen, closeExpense, idx, eTitle, eDate, eAmount, action}) => {
	const dispatch = useDispatch();

	const [expenseTitle, setExpenseTitle] = useState("");
	const [expenseDate, setExpenseDate] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");

	useEffect(()=>{
		setExpenseTitle(eTitle || "");
		setExpenseDate(eDate || new Date().toISOString().split("T")[0]);
		setExpenseAmount(eAmount || 1);
	},[eTitle, eDate, eAmount]);

	function formatDate(date) {
		if(date) {
		var [dd,mm,yyyy] = date.split('-');
		return `${yyyy}-${mm}-${dd}`;
		}
		else {
			return false;
		}
	}

	function handleExpenseTitleChange(event) {
		setExpenseTitle(event.target.value);
		console.log(event.target.value);
	}
	function handleExpenseDateChange(event) {
		setExpenseDate(event.target.value);
		console.log(event.target.value);
	}
	function handleExpenseAmountChange(event) {
		setExpenseAmount(event.target.value);
		console.log(event.target.value);
	}
	function AddExp() {
		var id = v4();
		console.log(id,expenseTitle,expenseDate,expenseAmount);
		dispatch(addExpense({id:id, title:expenseTitle, date:expenseDate, amount:expenseAmount}));
		setExpenseTitle("");
		setExpenseAmount(1);
		setExpenseDate(new Date().toISOString().split("T")[0]);
		closeExpense();
	}

	function UpdateExp() {
		console.log(idx, expenseTitle, expenseDate, expenseAmount);
		dispatch(updateExpense({id: idx, title: expenseTitle, date: expenseDate, amount: expenseAmount}));
		closeExpense();
	}

	return (
		<Modal isOpen={isExpenseOpen} onClose={closeExpense}>
        <div className='Form'>
			<h3 className='titleForm'>{(action === "add")?"Add Expense":"Update Expense"}</h3>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Expense Title</label>
			<input type='text' value={expenseTitle} onChange={handleExpenseTitleChange} className='inputItem'/>
			</div>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Date</label>
			<input className='inputItem' onChange={handleExpenseDateChange} value={expenseDate} type='date'/>
			</div>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Amount</label>
			<input className='inputItem' onChange={handleExpenseAmountChange} value={expenseAmount} type='number'/>
			</div>
			<div className='inputContainer'>
			<button className='inputButton' onClick={(action==="add")?AddExp:UpdateExp}>{(action==="add")?"Add":"Update"}</button>
			<button className='inputButton' onClick={closeExpense}>Close</button>
			</div>
		</div>
      </Modal>
	);
}

export default ExpenseModal