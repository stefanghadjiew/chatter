/* import { useEffect } from 'react'; */
import { useRef } from 'react';
import { Message } from '../Message';
import classes from './styles.module.scss';
import { useScrollToBottom } from 'customHooks';
import { ScrollToBottomButton } from 'components';
import { ContextMenu } from 'components';
import { useAppSelector } from 'app/hooks';

export const Messages = ({ messages }) => {
    const {
        isOpen: { forMessage },
    } = useAppSelector(state => state.contextMenu);
    const containerRef = useRef(null);
    const [pageEndRef] = useScrollToBottom({
        childrenOfElement: messages,
    });

    const fromUserMessages = messages.filter(m => m.isFromUser);
    const otherMessages = messages.filter(m => !m.isFromUser);

    const renderMessages = messages.map((message, i) => (
        <Message
            id={message.id}
            key={message.message + i}
            isFromUser={message.isFromUser}
            message={message.message}
            isLastUserMessage={messages[i] === fromUserMessages[0]}
            isLastMessage={messages[i] === otherMessages[0]} // since the chat-messages div has flex-direction column-reverse, the last displayed message will be the first one in the array
        />
    ));

    return (
        <div
            id="chat-messages"
            className={classes['chat-messages']}
            ref={containerRef}
        >
            <div ref={pageEndRef} />
            {renderMessages}
            <ScrollToBottomButton id="chat-messages" />
            <ContextMenu isOpen={forMessage} />
        </div>
    );
};
