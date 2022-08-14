import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    messages: [],
};

const notificationSystemSlice = createSlice({
    name: 'notification-system',
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messages.push({
                id: uuidv4(),
                description: action.payload.description,
                type: action.payload.type,
            });
        },
        removeMessageById(state, action) {
            state.messages = state.messages.filter(
                message => message.id !== action.payload.id
            );
        },
    },
});

export const { addMessage, removeMessageById } =
    notificationSystemSlice.actions;
export default notificationSystemSlice.reducer;
