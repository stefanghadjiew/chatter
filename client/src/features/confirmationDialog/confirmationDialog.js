import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    title: '',
    confirmation: '',
    type: '',
};

const confirmationDialogSlice = createSlice({
    name: 'confirmation-dialog',
    initialState,
    reducers: {
        toggleDialog(state) {
            state.isOpen = !state.isOpen;
        },
        addTitle(state, action) {
            state.title = action.payload;
        },
        addConfirmation(state, action) {
            state.confirmation = action.payload;
        },
        setDialogType(state, action) {
            state.type = action.payload;
        },
    },
});

export const { toggleDialog, addTitle, addConfirmation, setDialogType } =
    confirmationDialogSlice.actions;

export default confirmationDialogSlice.reducer;
