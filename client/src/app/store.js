import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import backdropPortalReducer from '../features/backdropPortal/backdropPortalSlice';
import notificationSystemSlice from 'features/notificationSystem/notificationSystemSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        backdropPortal: backdropPortalReducer,
        notificationSystem: notificationSystemSlice,
    },
});
