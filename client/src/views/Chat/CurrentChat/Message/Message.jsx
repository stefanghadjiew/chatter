import { useRef } from 'react';
import { FlexContainer } from 'containers';
import { Avatar, Paragraph } from 'components';
import { images } from 'assets';
import classes from './styles.module.scss';
import { useAppDispatch } from 'app/hooks';
import {
    openPortal,
    addChild,
} from 'features/backdropPortal/backdropPortalSlice';
import { useContextMenu } from 'customHooks';
import { CONTEXT_MENU_TYPES } from 'components/ContextMenu/contextMenuTypes';

export const Message = ({
    id,
    message,
    isFromUser,
    isLastMessage,
    isLastUserMessage,
}) => {
    //figure out how to show the Avatar when switching between current User typed message and recieved messages from friend, so that both user avatar and friend avatar are shown

    //needs to know information about message creator (either user or friend/friends)
    const messageRef = useRef(null);
    const dispatch = useAppDispatch();

    //The context menu needs to know wheather the current message that has been right clicked on is created from the user or a friend , so that it can render the 'Edit' option
    useContextMenu(id, messageRef, CONTEXT_MENU_TYPES.MESSAGE, isFromUser, {
        forMessage: true,
        forChatChannel: false,
    });

    return (
        <FlexContainer
            id={id}
            ref={messageRef}
            alignItems="center"
            componentClasses={classes['chat-messages__inner-container']}
        >
            <Avatar
                onClick={() => {
                    dispatch(addChild('UserInfo'));
                    dispatch(openPortal());
                }}
                size="medium"
                imgSrc={images.birdChat}
                componentClasses={[
                    classes['chat-messages__avatar'],
                    (isLastUserMessage || isLastMessage) &&
                        classes['chat-messages__avatar--last-message'],
                ]}
            />
            <FlexContainer
                flexDirection="column"
                componentClasses={[
                    classes['chat-messages__message'],
                    isFromUser
                        ? classes['chat-messages__message--from-user']
                        : '',
                    isLastUserMessage
                        ? classes['chat-messages__message--last-message']
                        : '',
                ]}
            >
                <Paragraph text={message} />
                <Paragraph
                    text="4:11 PM"
                    componentClasses={classes['chat-messages__message__time']}
                />
            </FlexContainer>
        </FlexContainer>
    );
};
