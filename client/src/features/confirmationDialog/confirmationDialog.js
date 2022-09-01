import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    title: '',
    confirmation: '',
    onConfirm: null,
    onClose: null,
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
        addOnConfirmHandler(state, action) {
            state.onConfirm = action.payload;
        },
        addOnCloseHandler(state, action) {
            state.onClose = action.payload;
        },
    },
});

export const {
    toggleDialog,
    addTitle,
    addConfirmation,
    addOnConfirmHandler,
    addOnCloseHandler,
} = confirmationDialogSlice.actions;

export default confirmationDialogSlice.reducer;
