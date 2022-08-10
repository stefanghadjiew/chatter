import React from 'react';
import { Page } from 'containers';
import { AllChats } from './AllChats';
import { CurrentChat } from './CurrentChat';
import classes from './styles.module.scss';

export const Chat = ({ setOpenBackdropPortal }) => {
    return (
        <Page componentClasses={classes['chat-page']}>
            <AllChats setOpenBackdropPortal={setOpenBackdropPortal} />
            <CurrentChat />
        </Page>
    );
};
