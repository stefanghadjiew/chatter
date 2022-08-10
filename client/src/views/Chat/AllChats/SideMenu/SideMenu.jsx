import { useMemo } from 'react';
import classes from './styles.module.scss';
import { FlexContainer } from 'containers';
import { Avatar, Paragraph, FramerMotionAnimation } from 'components';
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
import { animationTypes } from 'staticResources';

export const SideMenu = () => {
    const renderSideMenuItems = useMemo(() => {
        const menuItems = [
            {
                title: 'New Group',
                icon: <MdGroup />,
                bgClass: 'new-group',
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
            <li key={item + index} className={classes['side-menu__item']}>
                <FlexContainer
                    componentClasses={classes['flex-align-center']}
                >
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
    }, []);

    return (
        <FramerMotionAnimation
            animation={animationTypes.rightToLeft}
            animationDuration={0.2}
            componentClasses={classes['side-menu-wrapper']}
        >
            <nav className={classes['side-menu']}>
                <FlexContainer flexColumn={true}>
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
