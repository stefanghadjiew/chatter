import classes from './styles.module.scss';
import { useAppDispatch } from 'app/hooks';
import {
    closePortal,
    removeChild,
} from 'features/backdropPortal/backdropPortalSlice';

export const ClickAwayListener = ({ children }) => {
    const dispatch = useAppDispatch();

    const handleClickAway = e => {
        if (e.target.className.includes('clickAwayListener')) {
            dispatch(removeChild());
            dispatch(closePortal());
        }
        return;
    };

    return (
        <div
            className={classes['clickAwayListener']}
            onClick={handleClickAway}
        >
            {children}
        </div>
    );
};
