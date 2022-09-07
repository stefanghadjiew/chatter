import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    childComponent: null,
};

const backdropPortalSlice = createSlice({
    name: 'backdrop-portal',
    initialState,
    reducers: {
        openPortal(state) {
            if (!state.childComponent) return;
            state.isOpen = true;
        },
        closePortal(state) {
            state.isOpen = false;
        },
        addChild(state, action) {
            state.childComponent = action.payload;
        },
        removeChild(state) {
            state.childComponent = null;
        },
    },
});

export const { openPortal, closePortal, addChild, removeChild } =
    backdropPortalSlice.actions;

export default backdropPortalSlice.reducer;
