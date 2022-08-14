import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    childComponent: null,
    backdropPortalStyle: '',
};

const backdropPortalSlice = createSlice({
    name: 'backdrop-portal',
    initialState,
    reducers: {
        openPortal(state) {
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
        addStyle(state, action) {
            state.backdropPortalStyle = action.payload;
        },
        removeStyle(state) {
            state.backdropPortalStyle = '';
        },
    },
});

export const {
    openPortal,
    closePortal,
    addChild,
    removeChild,
    addStyle,
    removeStyle,
} = backdropPortalSlice.actions;

export default backdropPortalSlice.reducer;
