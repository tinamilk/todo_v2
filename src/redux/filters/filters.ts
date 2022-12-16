import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Filter, Filters } from '../../types/types';

const initialState:Filters = {
	filter: ''
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<Filter>) => {
			state.filter = action.payload;
		},
		setDefault: (state) => {
			state.filter = '';
		}
	}
});

export const {setFilter, setDefault} = filterSlice.actions;
export const selectFilter = (state:RootState) => state.filter;

export default filterSlice.reducer;