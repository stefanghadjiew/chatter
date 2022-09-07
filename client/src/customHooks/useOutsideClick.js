import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import {
    closePortal,
    removeChild,
} from 'features/backdropPortal/backdropPortalSlice';

export const useOutsideClick = (elRef, outsideClickHandler = null) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleOutsideClick = e => {
            if (elRef.current && !elRef.current.contains(e.target)) {
                if (outsideClickHandler) {
                    outsideClickHandler();
                } else {
                    dispatch(removeChild());
                    dispatch(closePortal());
                }
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () =>
            document.removeEventListener('mousedown', handleOutsideClick);
    }, [elRef, dispatch, outsideClickHandler]);
};
