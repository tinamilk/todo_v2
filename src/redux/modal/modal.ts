import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type ModalState = {
    isActive: string;
}

const initialState:ModalState = {
	isActive: ''
};

export const modelSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<string>) => {
			state.isActive = action.payload;
		},
		setInactive: (state) => {
			state.isActive = '';
		}
	}
});

export const {setActive, setInactive} = modelSlice.actions;
export const selectFilter = (state:RootState) => state.filter;

export default modelSlice.reducer;