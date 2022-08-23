import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from '../features/stepper/stepperSlice';
import backdropPortalReducer from '../features/backdropPortal/backdropPortalSlice';
import notificationSystemSlice from 'features/notificationSystem/notificationSystemSlice';

export const store = configureStore({
    reducer: {
        stepper: stepperReducer,
        backdropPortal: backdropPortalReducer,
        notificationSystem: notificationSystemSlice,
    },
});
