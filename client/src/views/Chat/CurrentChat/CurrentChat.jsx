import { memo } from 'react';
import classes from './styles.module.scss';
import { IconButton, Paragraph } from 'components';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { Messages } from './Messages';
import { ChatInput } from './ChatInput';

export const CurrentChat = ({ messages }) => {
    const ActionsComponent = () => (
        <div className={classes['type-message__actions']}>
            <IconButton icon={<AiOutlinePaperClip />} />
            <IconButton icon={<BsEmojiSmile />} />
            <IconButton icon={<BiMicrophone />} />
        </div>
    );

    const MemoizedActionsComponent = memo(ActionsComponent);

    return (
        <div className={classes['current-chat']}>
            {messages && (
                <div className={classes['type-message-wrapper']}>
                    <MemoizedActionsComponent />
                    <ChatInput />
                </div>
            )}
            {messages ? (
                <Messages messages={messages} />
            ) : (
                <Paragraph
                    componentClasses={classes['current-chat__no-chat-selected']}
                    text="Select a chat to start messaging"
                />
            )}
        </div>
    );
};
