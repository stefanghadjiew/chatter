import { createSlice } from '@reduxjs/toolkit';
import { CONTEXT_MENU_TYPES } from 'components/ContextMenu/contextMenuTypes';

const initialState = {
    isOpen: {
        forMessage: false,
        forChatChannel: false,
    },
    type: '',
    anchorPoint: {
        x: 0,
        y: 0,
    },
    isCurrentMessageUsingContextMenuByUser: false,
};

const contextMenuSlice = createSlice({
    name: 'context-menu',
    initialState,
    reducers: {
        toggleContextMenu(state, action) {
            if (
                !state.type ||
                !Object.values(CONTEXT_MENU_TYPES).includes(state.type)
            )
                return;
            state.isOpen = action.payload;
        },
        setAnchorPoint(state, action) {
            state.anchorPoint = action.payload;
        },
        setType(state, action) {
            if (!Object.values(CONTEXT_MENU_TYPES).includes(action.payload))
                return;
            state.type = action.payload;
        },
        setIsCurrentMessageUsingContextMenuByUser(state, action) {
            state.isCurrentMessageUsingContextMenuByUser = action.payload;
        },
    },
});

export const {
    toggleContextMenu,
    setAnchorPoint,
    setType,
    setIsCurrentMessageUsingContextMenuByUser,
} = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
