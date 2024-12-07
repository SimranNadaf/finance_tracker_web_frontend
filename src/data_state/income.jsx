import { createSlice} from '@reduxjs/toolkit';
import IncomeData from '../dummy_data/incomeData';

const IncomeSlice = createSlice({
	name:'income',
	initialState: {
		value: IncomeData
	},
	reducers: {
		addIncome: (state, action) => {
			const {id, title, date, amount} = action.payload;
			state.value = [...state.value, {id: id, title: title, date: date, amount: amount}];
		},
		deleteIncome: (state, action) => {
			console.log("deleting Income...");
			const { id } = action.payload;
			state.value = state.value.filter((item)=> item.id != id);
			console.log(state.value);
		},
		updateIncome: (state, action) => {
			const {id, title, date, amount} = action.payload;
			state.value = state.value.map((item) => (item.id === id) ? {...item, title, date, amount} : item);
		}
	},
});

export const { addIncome, deleteIncome, updateIncome } = IncomeSlice.actions;

export default IncomeSlice.reducer;