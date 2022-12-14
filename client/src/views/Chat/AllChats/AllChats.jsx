import React, { useState } from 'react';
import classes from './styles.module.scss';
import { IconButton, Input, ContextMenu } from 'components';
import { FlexContainer } from 'containers';
import { IoMdMenu } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
    openPortal,
    addChild,
} from 'features/backdropPortal/backdropPortalSlice';
import { ChatChannel } from './ChatChannel';

export const AllChats = ({ channels, setCurrentlySelectedChannel }) => {
    const {
        isOpen: { forChatChannel },
    } = useAppSelector(state => state.contextMenu);
    const [selectedChatIndex, setSelectedChatIndex] = useState(null); //this is used to apply the css styling for the selected channel
    const dispatch = useAppDispatch();

    const renderChatChannels = channels.map((item, index) => (
        <ChatChannel
            id={`chat-channel__${index}`}
            chatName={item}
            chatIndex={index}
            key={item + index}
            selectedChatIndex={selectedChatIndex}
            setSelectedChatIndex={setSelectedChatIndex}
            setCurrentlySelectedChannel={setCurrentlySelectedChannel}
        />
    ));

    return (
        <nav className={classes['nav']}>
            <FlexContainer
                alignItems="center"
                componentClasses={[classes['p-small']]}
            >
                <IconButton
                    icon={<IoMdMenu />}
                    onClick={() => {
                        dispatch(addChild('SideMenu'));
                        dispatch(openPortal());
                    }}
                />
                <Input
                    type="text"
                    placeholder="Search"
                    removeValidation={true}
                    removeOutline={true}
                    componentClasses={classes['search']}
                />
                {/* <IconButton />
                <Search /> */}
            </FlexContainer>
            <ul className={classes['nav__list']}>{renderChatChannels}</ul>
            <ContextMenu isOpen={forChatChannel} />
        </nav>
    );
};
