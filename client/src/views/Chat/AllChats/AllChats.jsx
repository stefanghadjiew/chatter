import React, { useState, useMemo } from 'react';
import classes from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Avatar, Paragraph, IconButton, Input } from 'components';
import { images } from 'assets';
import { FlexContainer } from 'containers';
import { MdPeopleAlt } from 'react-icons/md'; // -> if the chat is a channel
import { IoMdMenu } from 'react-icons/io';
import { useAppDispatch } from 'app/hooks';
import {
    openPortal,
    addChild,
} from 'features/backdropPortal/backdropPortalSlice';
import { SideMenu } from './SideMenu';

export const AllChats = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const dispatch = useAppDispatch();

    const renderChatChannels = useMemo(() => {
        const data = [
            'Chat-channel-1',
            'Chat-channel-2',
            'Chat-channel-3',
        ];
        return data.map((item, index) => (
            <Link
                to="#"
                className={classes['nav__link']}
                key={item + index}
            >
                <li
                    className={[
                        classes['nav__item'],
                        selectedIndex === index &&
                            classes['nav__item--active'],
                    ].join(' ')}
                    onClick={() => setSelectedIndex(index)}
                >
                    <Avatar imgSrc={images.birdChat} />
                    <FlexContainer
                        flexColumn={true}
                        componentClasses={[
                            classes['m-l-1'],
                            classes['flex-1'],
                        ]}
                    >
                        <FlexContainer
                            componentClasses={[
                                classes['channel-name__container'],
                                classes['flex-space-between'],
                            ]}
                        >
                            <FlexContainer
                                componentClasses={
                                    classes['flex-align-center']
                                }
                            >
                                {index === 1 && <MdPeopleAlt />}
                                <Paragraph
                                    text={item}
                                    componentClasses={
                                        classes['channel-name']
                                    }
                                />
                            </FlexContainer>
                            <Paragraph text="10:51 PM" />
                        </FlexContainer>

                        <Paragraph
                            text="Person : last typed"
                            componentClasses={classes['last-message']}
                        />
                    </FlexContainer>
                </li>
            </Link>
        ));
    }, [selectedIndex]);

    return (
        <nav className={classes['nav']}>
            <FlexContainer
                componentClasses={[
                    classes['p-small'],
                    classes['flex-align-center'],
                ]}
            >
                <IconButton
                    icon={<IoMdMenu />}
                    onClick={() => {
                        dispatch(addChild(<SideMenu />));
                        dispatch(openPortal());
                    }}
                />
                <Input
                    type="text"
                    label="Search"
                    removeLabel={true}
                    componentClasses={classes['search']}
                />
                {/* <IconButton />
                <Search /> */}
            </FlexContainer>
            <ul className={classes['nav__list']}>{renderChatChannels}</ul>
        </nav>
    );
};
