import { useRef } from 'react';
import { FlexContainer } from 'containers';
import classes from './styles.module.scss';
import { FramerMotionAnimation, animationTypes } from 'components';
import { useOutsideClick } from 'customHooks';
import { toggleContextMenu } from 'features/contextMenu/contextMenuSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    MESSAGE_MENU_ITEMS,
    MESSAGE_MENU_ITEMS_FOR_USER,
} from '../contextMenuItems';

export const Message = ({ anchorPoint }) => {
    const { isCurrentMessageUsingContextMenuByUser } = useAppSelector(
        state => state.contextMenu
    );
    const messageRef = useRef(null);

    const dispatch = useAppDispatch();

    const renderMenuItems = (
        isCurrentMessageUsingContextMenuByUser
            ? MESSAGE_MENU_ITEMS_FOR_USER
            : MESSAGE_MENU_ITEMS
    ).map((menuItem, i) => (
        <FlexContainer
            key={menuItem.text + i}
            componentClasses={classes['menu__item']}
        >
            {menuItem.icon}
            {menuItem.text}
        </FlexContainer>
    ));

    useOutsideClick(messageRef, () =>
        dispatch(
            toggleContextMenu({ forMessage: false, forChatChannel: false })
        )
    );

    return (
        <FramerMotionAnimation
            style={{
                top: anchorPoint.y,
                left: anchorPoint.x,
                position: 'absolute',
            }}
            ref={messageRef}
            motionKey="context-menu__message-animation"
            componentClasses={classes['height-auto']}
            animationVariant={animationTypes.bottomToTop}
            animationDuration={0.2}
        >
            <FlexContainer
                flexDirection="column"
                componentClasses={[classes['menu']]}
            >
                {renderMenuItems}
            </FlexContainer>
        </FramerMotionAnimation>
    );
};
