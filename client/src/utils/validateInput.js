import { validatePassword, isEmpty, isEmail } from 'utils';

export const validateInput = (type, value) => {
    let error;
    switch (type) {
        case 'email':
            error = isEmail(value); //TODO: error variable does not hold a bool value , so rename the functions
            break;
        case 'text':
            error = isEmpty(value);
            break;
        case 'password':
            error = validatePassword(value);
            break;
        default:
            return '';
    }
    return error;
};
