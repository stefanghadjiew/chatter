import { createSlice } from '@reduxjs/toolkit';

//TODO: Finish this to have the forms in redux and adjust the Input component,Input error component, useInput hook might become absolete and some of the utility functions

const validateForm = formValues => {
    let formErrors = {};
    const validEmailRegex = /\S+@\S+\.\S+/;
    formErrors.firstName =
        formValues.firstName?.length > 0 ? '' : 'The field should not be blank';
    formErrors.lastName =
        formValues.lastName?.length > 0 ? '' : 'The field should not be blank';
    formErrors.nickName =
        formValues.nickName?.length > 0 ? '' : 'The field should not be blank';
    formErrors.email = formValues.email?.match(validEmailRegex)
        ? ''
        : 'Not a valid email';
    formErrors.password = validatePassword(formValues.password);
    return formErrors;
};

export const validatePassword = password => {
    let error = {};
    error.length = password.length >= 8 ? '' : 'be at least 8 characters long';
    error.characters = password.match(['[A-Za-z]'])
        ? ''
        : 'include both lower and upper case characters';
    error.symbols = password.match(/[-._!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|]+/)
        ? ''
        : 'include at least one number and symbol';
    return error;
};

const initialState = {
    values: {
        registrationForm: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            password: '',
        },
        loginForm: {
            email: '',
            password: '',
        },
        errors: {},
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        populateRegistrationForm(state, action) {
            const formErrors = validateForm(action.payload);
            if (Object.values(formErrors).every(v => v !== '')) {
                state.values.errors = formErrors;
                return;
            }
            state.values.registrationForm = action.payload;
        },
        populateLoginForm(state, action) {
            const formErrors = validateForm(action.payload);
            if (Object.values(formErrors).every(v => v !== '')) {
                state.values.errors = formErrors;
                return;
            }
            state.values.loginForm = action.payload;
        },
    },
});

export const { populateRegistrationForm, populateLoginForm } =
    formSlice.actions;

export default formSlice.reducer;
