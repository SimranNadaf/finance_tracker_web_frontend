import { configureStore } from '@reduxjs/toolkit';
import incomeReducer from './income';
import expenseReducer from './expense';

const store = configureStore({
	reducer: {
		income: incomeReducer,
		expense: expenseReducer,
	}
});

export default store;