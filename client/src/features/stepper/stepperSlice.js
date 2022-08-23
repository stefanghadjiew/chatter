import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 0,
};

const stepperSlice = createSlice({
    name: 'stepper',
    initialState,
    reducers: {
        incrementStep(state) {
            state.currentStep++;
        },
        decrementStep(state) {
            if (state.currentStep === 0) return;
            state.currentStep--;
        },
        resetSteps(state) {
            state.currentStep = 0;
        },
    },
});

export const { incrementStep, decrementStep, resetSteps } =
    stepperSlice.actions;
export default stepperSlice.reducer;
