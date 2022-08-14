import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickname: '',
    email: '',
    phone: '',
    contacts: [],
    channels: [],
    groups: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateNickname(state, action) {
            state.nickname = action.payload;
        },
    },
});

export const { updateNickname } = userSlice.actions;
export default userSlice.reducer;
