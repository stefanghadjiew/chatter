import { useEffect, useCallback } from 'react';
import {
    setAnchorPoint,
    toggleContextMenu,
    setType,
    setIsCurrentMessageUsingContextMenuByUser,
} from 'features/contextMenu/contextMenuSlice';
import { useAppDispatch } from 'app/hooks';

export const useContextMenu = (
    componentId,
    componentRef,
    menuType,
    isFromUser,
    isOpen
) => {
    const dispatch = useAppDispatch();

    //componentId will be used to apply different actions for the specific message (Edit, Forward, Reply etc...)

    const handleRightClick = useCallback(
        e => {
            e.preventDefault();
            dispatch(setIsCurrentMessageUsingContextMenuByUser(isFromUser));
            dispatch(setType(menuType));
            dispatch(setAnchorPoint({ x: e.layerX + 2, y: e.layerY - 180 }));
            dispatch(toggleContextMenu(isOpen));
        },
        [dispatch, menuType, isFromUser]
    );

    useEffect(() => {
        const component = document.getElementById(componentId);

        if (componentRef.current) {
            component.addEventListener('contextmenu', handleRightClick);
        }

        return () => {
            component.removeEventListener('contextmenu', handleRightClick);
        };
    }, [handleRightClick, componentId, componentRef]);
};
