import { useRef } from 'react';
import { FlexContainer } from 'containers';
import classes from './styles.module.scss';
import { FramerMotionAnimation, animationTypes } from 'components';
import { useOutsideClick } from 'customHooks';
import { toggleContextMenu } from 'features/contextMenu/contextMenuSlice';
import { useAppDispatch } from 'app/hooks';
import { CHANNEL_MENU_ITEMS } from '../contextMenuItems';

export const Channel = ({ anchorPoint }) => {
    const dispatch = useAppDispatch();
    const channelRef = useRef(null);

    const renderChannelItems = CHANNEL_MENU_ITEMS.map((menuItem, i) => (
        <FlexContainer
            key={menuItem.text + i}
            componentClasses={classes['menu__item']}
        >
            {menuItem.icon}
            {menuItem.text}
        </FlexContainer>
    ));

    useOutsideClick(channelRef, () =>
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
            ref={channelRef}
            motionKey="context-menu__message-animation"
            componentClasses={classes['height-auto']}
            animationVariant={animationTypes.bottomToTop}
            animationDuration={0.2}
        >
            <FlexContainer
                flexDirection="column"
                componentClasses={[classes['menu']]}
            >
                {renderChannelItems}
            </FlexContainer>
        </FramerMotionAnimation>
    );
};
