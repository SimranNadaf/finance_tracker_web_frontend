import './addExpList.css';
import MainSector from './common/mainSector';
//import { useSelector }  from 'react-redux';
//import { deleteExpense } from '../data_state/expense';
//import { deleteIncome } from '../data_state/income';
//import { useDispatch } from 'react-redux';

const AddExpList = () => {
	//const dispatch = useDispatch();
	//function deleteExpense(id) {
	//	dispatch(deleteExpense({id: id}));
	//}
	//function deleteIncome(id) {
	//	dispatch(deleteIncome({id: id}));
	//}
	//const income = useSelector(state => state.income?.value || []);
	//const expense = useSelector(state => state.expense.value);
	return (
		<>
	<div className="mainSector">
	<MainSector title="My Expense"/>

	<MainSector title="My Income"/>
	</div>
		</>
	);
}

export default AddExpList;