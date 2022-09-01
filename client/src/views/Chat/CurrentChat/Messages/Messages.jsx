import { Message } from '../Message';
import classes from './styles.module.scss';
import { useScrollToBottom } from 'customHooks';
import { ScrollToBottomButton } from 'components';

export const Messages = ({ messages }) => {
    const [pageEndRef] = useScrollToBottom({
        childrenOfElement: messages,
    });

    const fromUserMessages = messages.filter(m => m.isFromUser);
    const otherMessages = messages.filter(m => !m.isFromUser);

    const renderMessages = messages.map((message, i) => (
        <Message
            key={message.message + i}
            isFromUser={message.isFromUser}
            message={message.message}
            isLastUserMessage={messages[i] === fromUserMessages[0]}
            isLastMessage={messages[i] === otherMessages[0]} // since the chat-messages div has flex-direction column-reverse, the last displayed message will be the first one in the array
        />
    ));

    return (
        <div id="chat-messages" className={classes['chat-messages']}>
            <div ref={pageEndRef} />
            {renderMessages}
            <ScrollToBottomButton id="chat-messages" />
        </div>
    );
};
