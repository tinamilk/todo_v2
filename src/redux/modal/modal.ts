import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type ModalState = {
    isActive: boolean;
}

const initialState:ModalState = {
	isActive: false
};

export const modelSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setActive: (state) => {
			state.isActive = true;
		},
		setInactive: (state) => {
			state.isActive = false;
		}
	}
});

export const {setActive, setInactive} = modelSlice.actions;
export const selectFilter = (state:RootState) => state.filter;

export default modelSlice.reducer;