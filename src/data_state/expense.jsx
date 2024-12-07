import { createSlice } from "@reduxjs/toolkit";
import expenseData from "../dummy_data/expenseData";

const ExpenseSlice = createSlice({
	name: 'expense',
	initialState: {
		value: expenseData,
	},
	reducers: {
		addExpense: (state, action) => {
			const {id, title, date, amount} = action.payload;
			state.value = [...state.value, {id:id, title:title, date:date, amount:amount}];
		},
		deleteExpense: (state, action) => {
			const { id } = action.payload;
			state.value = state.value.filter((item) => item.id != id);
			console.log(state.value);
		},
		updateExpense: (state, action) => {
			const { id, title, date, amount } = action.payload;
			console.log("updating");
			console.log(id, title, date, amount);
			state.value = state.value.map((item) => (item.id === id) ? {...item, title, date, amount} : item);
			console.log("updating...",state.value);
		}
	},
});

export const { addExpense, deleteExpense, updateExpense } = ExpenseSlice.actions;

export default ExpenseSlice.reducer;