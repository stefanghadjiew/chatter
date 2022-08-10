import classes from './styles.module.scss';

export const ClickAwayListener = ({ children, setOpenBackdropPortal }) => {
    const handleClickAway = e => {
        if (e.target.className.includes('clickAwayListener')) {
            setOpenBackdropPortal(false);
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
