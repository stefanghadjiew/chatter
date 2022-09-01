import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    phone: '+359 884703361',
    firstName: 'Stefan',
    lastName: 'Hadzhiev',
    onConfirm: null,
    onClose: null,
};

const editUserFriendSlice = createSlice({
    name: 'edit-user-friend',
    initialState,
    reducers: {
        toggleEditUserDialog(state) {
            state.isOpen = !state.isOpen;
        },
        prepopulatePhone(state, action) {
            state.phone = action.payload;
        },
        prepopulateFirstName(state, action) {
            state.firstName = action.payload;
        },
        prepopulateLastName(state, action) {
            state.lastName = action.payload;
        },
        addOnConfirmEditContactHandler(state, action) {
            state.onConfirm = action.payload;
        },
        addOnCloseEditContactHandler(state, action) {
            state.onClose = action.payload;
        },
    },
});

export const {
    toggleEditUserDialog,
    prepopulatePhone,
    prepopulateFirstName,
    prepopulateLastName,
    addOnConfirmEditContactHandler,
    addOnCloseEditContactHandler,
} = editUserFriendSlice.actions;

export default editUserFriendSlice.reducer;
