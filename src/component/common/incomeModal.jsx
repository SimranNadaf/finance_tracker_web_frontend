import Modal from '../modal';
import '../addExpIn.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../../data_state/income';
import { updateIncome } from '../../data_state/income';
import { v4 } from 'uuid';

const IncomeModal = ({isIncomeOpen, closeIncome, idx, iSource, iDate, iAmount, action}) => {
	const dispatch = useDispatch();

	useEffect(()=>{
		setIncomeSource(iSource || "");
		setIncomeDate(iDate || new Date().toISOString().split("T")[0]);
		setIncomeAmount(iAmount || 1);
	},[iSource, iDate, iAmount]);

	const [incomeSource, setIncomeSource] = useState("");
	const [incomeDate, setIncomeDate] = useState("");
	const [incomeAmount, setIncomeAmount] = useState("");

	function handleIncomeSourceChange(event) {
		setIncomeSource(event.target.value);
		console.log(event.target.value);
	}
	function handleIncomeDateChange(event) {
		setIncomeDate(event.target.value);
		console.log(event.target.value);
	}
	function handleIncomeAmountChange(event) {
		setIncomeAmount(event.target.value);
		console.log(event.target.value);
	}
	function AddIncome() {
		var id = v4();
		dispatch(addIncome({id:id, title:incomeSource, date: incomeDate,amount: incomeAmount}));
		setIncomeSource("");
		setIncomeAmount(1);
		setIncomeDate(new Date().toISOString().split("T")[0]);
		closeIncome();
		alert("log added successfully!!");
	}
	function UpdateIncome() {
		console.log(idx, incomeSource, incomeDate, incomeAmount);
		dispatch(updateIncome({id: idx, title: incomeSource, date: incomeDate, amount: incomeAmount}));
		closeIncome();
		alert("log updated successfully!!");
	}
	return (
		<Modal isOpen={isIncomeOpen} onClose={closeIncome}>
        <div className='Form'>
			<h3 className='titleForm'>{(action === "add")?"Add Income":"Update Income"}</h3>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Income Sourse</label>
			<input type='text' value={incomeSource} onChange={handleIncomeSourceChange} className='inputItem'/>
			</div>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Date</label>
			<input className='inputItem'  onChange={handleIncomeDateChange} value={incomeDate} type='date'/>
			</div>
			<div className='inputContainer'>
			<label className='inputItem' style={{fontSize: "20px"}}>Amount</label>
			<input className='inputItem' onChange={handleIncomeAmountChange} value={incomeAmount} type='number'/>
			</div>
			<div className='inputContainer'>
			<button className='inputButton' onClick={(action == "add")?AddIncome:UpdateIncome}>{(action === "add")?"Add":"Update"}</button>
			<button className='inputButton' onClick={closeIncome}>Close</button>
			</div>
		</div>
      </Modal>
	);
}

export default IncomeModal;