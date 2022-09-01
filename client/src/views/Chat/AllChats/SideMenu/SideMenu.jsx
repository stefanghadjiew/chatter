import { useMemo } from 'react';
import classes from './styles.module.scss';
import { FlexContainer } from 'containers';
import {
    Avatar,
    Paragraph,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { images } from 'assets';
import {
    MdGroup,
    MdChatBubble,
    MdPermContactCalendar,
    MdNightlight,
} from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { FaSave } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { UserInfo } from './UserInfo';
import { useAppDispatch } from 'app/hooks';
import { addChild } from 'features/backdropPortal/backdropPortalSlice';
import { NewGroupChat } from 'views/Chat/NewGroupChat';

export const SideMenu = () => {
    const dispatch = useAppDispatch();

    const renderSideMenuItems = useMemo(() => {
        const menuItems = [
            {
                title: 'New Group',
                icon: <MdGroup />,
                bgClass: 'new-group',
                onClick: () => {
                    dispatch(addChild(<NewGroupChat />));
                },
            },
            {
                title: 'New Channel',
                icon: <MdChatBubble />,
                bgClass: 'new-channel',
            },
            {
                title: 'Contacts',
                icon: <MdPermContactCalendar />,
                bgClass: 'contacts',
            },
            {
                title: 'Calls',
                icon: <ImPhone />,
                bgClass: 'calls',
            },
            {
                title: 'Saved Messages',
                icon: <FaSave />,
                bgClass: 'saved-messages',
            },
            {
                title: 'Settings',
                icon: <IoMdSettings />,
                bgClass: 'settings',
            },
            {
                title: 'Night Mode',
                icon: <MdNightlight />,
                bgClass: 'night-mode',
            },
        ];

        return menuItems.map((item, index) => (
            <li
                key={item + index}
                className={classes['side-menu__item']}
                onClick={item.onClick}
            >
                <FlexContainer alignItems="center">
                    <figure
                        className={`${classes['icon-wrapper']} ${
                            classes[item.bgClass]
                        }`}
                    >
                        {item.icon}
                    </figure>

                    <Paragraph text={item.title} />
                </FlexContainer>
            </li>
        ));
    }, [dispatch]);

    return (
        <FramerMotionAnimation
            animationVariant={animationTypes.rightToLeft}
            animationDuration={0.2}
            motionKey="framer-motion-side-menu"
            componentClasses={classes['side-menu-wrapper']}
        >
            <nav className={classes['side-menu']}>
                <FlexContainer flexDirection="column">
                    <Avatar
                        imgSrc={images.birdChat}
                        componentClasses={classes['avatar']}
                    />
                    <UserInfo
                        userName="Cheffo0o"
                        userPhone="+359 89928238"
                    />
                </FlexContainer>
                <ul className={classes['side-menu__list']}>
                    {renderSideMenuItems}
                </ul>
            </nav>
        </FramerMotionAnimation>
    );
};
