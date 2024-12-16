import './addExpIn.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import IncomeModal from './common/incomeModal';
import ExpenseModal from './common/expenseModal';

const AddExpIn = () => {
	const dispatch = useDispatch();

	const [isExpenseOpen, setIsExpenseOpen] = useState(false);
	const openExpense = () => setIsExpenseOpen(true);
	const closeExpense = () => setIsExpenseOpen(false);
	const [isIncomeOpen, setIsIncomeOpen] = useState(false);
	const openIncome = () => setIsIncomeOpen(true);
	const closeIncome = () => setIsIncomeOpen(false);

	const [incomeSource, setIncomeSource] = useState("");
	const [incomeDate, setIncomeDate] = useState(new Date().toISOString().split("T")[0]);
	const [incomeAmount, setIncomeAmount] = useState(1);

	const [expenseTitle, setExpenseTitle] = useState("");
	const [expenseDate, setExpenseDate] = useState(new Date().toISOString().split("T")[0]);
	const [expenseAmount, setExpenseAmount] = useState(1);

  return (
    <>
      <div className="main">
        <button className="addBtn" onClick={openExpense}>
          Add Expense
        </button>
        <button className="addBtn" onClick={openIncome}>Add Income</button>
      </div>
	  <ExpenseModal isExpenseOpen={isExpenseOpen} closeExpense={closeExpense} eTitle={expenseTitle} eDate={expenseDate} eAmount={expenseAmount} action="add"/>     
      
	  <IncomeModal isIncomeOpen={isIncomeOpen} closeIncome={closeIncome} iSource={incomeSource} iDate={incomeDate} iAmount={incomeAmount} action="add"/>
    </>
  );
};

export default AddExpIn;