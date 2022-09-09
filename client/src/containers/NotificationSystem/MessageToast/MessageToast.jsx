import classes from './styles.module.scss';
import { Paragraph, H4 } from 'components';
import { useAppDispatch } from 'app/hooks';
import { removeMessageById } from 'features/notificationSystem/notificationSystemSlice';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';

export const MessageToast = ({ type = 'info', description, id }) => {
    const dispatch = useAppDispatch();
    const MESSAGE_TOAST_TYPES = ['info', 'success', 'warning'];

    const assignToastTitle = MESSAGE_TOAST_TYPES.includes(type)
        ? type
        : 'Something is wrong';

    const assignToastType = MESSAGE_TOAST_TYPES.includes(type)
        ? classes[`message-toast--${type}`]
        : classes[`message-toast--${MESSAGE_TOAST_TYPES[0]}`];

    const assignToastIcon =
        type === MESSAGE_TOAST_TYPES[0] ? (
            <AiOutlineInfoCircle />
        ) : type === MESSAGE_TOAST_TYPES[1] ? (
            <BsCheckCircle />
        ) : (
            <RiErrorWarningLine />
        );

    return (
        <div className={`${classes['message-toast']} ${assignToastType}`}>
            <div className={classes['icon']}>{assignToastIcon}</div>
            <div className={classes['content']}>
                <H4 text={assignToastTitle} />
                <Paragraph text={description} />
                <button onClick={() => dispatch(removeMessageById({ id }))}>
                    X
                </button>
            </div>
        </div>
    );
};
