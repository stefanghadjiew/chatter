import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from '../features/stepper/stepperSlice';
import backdropPortalReducer from '../features/backdropPortal/backdropPortalSlice';
import notificationSystemReducer from 'features/notificationSystem/notificationSystemSlice';
import confirmationDialogReducer from 'features/confirmationDialog/confirmationDialog';
import editUserSliceReducer from 'features/editUser/editUserSlice';

export const store = configureStore({
    reducer: {
        stepper: stepperReducer,
        backdropPortal: backdropPortalReducer,
        notificationSystem: notificationSystemReducer,
        confirmationDialog: confirmationDialogReducer,
        editUserDialog: editUserSliceReducer,
    },
});
