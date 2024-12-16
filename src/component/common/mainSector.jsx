import Card from './card';
import './mainSector.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { deleteExpense } from '../../data_state/expense';
import { deleteIncome } from '../../data_state/income'; 
import { useDispatch } from 'react-redux';
import IncomeModal from '../common/incomeModal';
import ExpenseModal from '../common/expenseModal';

const MainSector = ({title}) => {
	const dispatch = useDispatch();

	const [isExpenseOpen, setIsExpenseOpen] = useState(false);
	const openExpense = () => setIsExpenseOpen(true);
	const closeExpense = () => setIsExpenseOpen(false);
	const [isIncomeOpen, setIsIncomeOpen] = useState(false);
	const openIncome = () => setIsIncomeOpen(true);
	const closeIncome = () => setIsIncomeOpen(false);

	const [incomeIdx, setIncomeIdx] = useState();
	const [incomeSource, setIncomeSource] = useState("");
	const [incomeDate, setIncomeDate] = useState("");
	const [incomeAmount, setIncomeAmount] = useState("");

	const [expenseIdx, setExpenseIdx] = useState();
	const [expenseTitle, setExpenseTitle] = useState("");
	const [expenseDate, setExpenseDate] = useState("");
	const [expenseAmount, setExpenseAmount] = useState("");

	function onDelete(id, tit) {
		console.log(title);
		if(confirm("are going to delete this log?")){
		if(tit == "My Expense") {
			console.log(title);
			dispatch(deleteExpense({id:id}));
			alert("This Log Deleted Successfully!!");
		}
		else {
			console.log(title);
			dispatch(deleteIncome({id:id}));
			alert("This Log Deleted Successfully!!");
		}
		}
	}

	function onEdit(data, tit) {
		console.log(data);
		console.log(tit);
		if(tit == "My Expense"){
			setExpenseIdx(data.id);
			setExpenseTitle(data.title);
			setExpenseDate(data.date);
			setExpenseAmount(data.amount);
			console.log(expenseTitle, expenseDate, expenseAmount);
			openExpense();
		}
		else{
			setIncomeIdx(data.id);
			setIncomeSource(data.title);
			setIncomeDate(data.date);
			setIncomeAmount(data.amount);
			openIncome();
		}
	}

	if(title == "My Expense") {
		var data = useSelector( state => state.expense?.value || []);
	}
	else {
		var data = useSelector( state => state.income?.value || []);
	}
	return (
		<>
		<div className="Sector">
	<h2>{title}</h2>
	{
		data.length>0?data.map((e) => {
			return (<Card key={e.id} data={e} onDelete={onDelete} onEdit={onEdit} title={title}/>);
		})
		:
		<div>
			<h4>No Data Available....</h4>
		</div>
	}
	</div>
	<ExpenseModal isExpenseOpen={isExpenseOpen} closeExpense={closeExpense} idx={expenseIdx} eTitle={expenseTitle} eDate={expenseDate} eAmount={expenseAmount} action="update"/>     
	<IncomeModal isIncomeOpen={isIncomeOpen} closeIncome={closeIncome} idx={incomeIdx} iSource={incomeSource} iDate={incomeDate} iAmount={incomeAmount}/>
 </>
	);
}

export default MainSector;