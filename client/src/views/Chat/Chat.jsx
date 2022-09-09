import { useState } from 'react';
import { Page } from 'containers';
import { AllChats } from './AllChats';
import { CurrentChat } from './CurrentChat';
import classes from './styles.module.scss';
import { userChats } from './dummyData';

export const Chat = () => {
    const [currentlySelectedChannel, setCurrentlySelectedChannel] =
        useState(null);
    const userChannels = userChats.map(chat => chat.channel);

    const currentlySelectedChannelMessages = userChats.filter(
        chat => chat.channel === currentlySelectedChannel
    )[0]?.messages;

    return (
        <Page componentClasses={classes['chat-page']}>
            <AllChats
                channels={userChannels}
                setCurrentlySelectedChannel={setCurrentlySelectedChannel}
            />
            <CurrentChat messages={currentlySelectedChannelMessages} />
        </Page>
    );
};
