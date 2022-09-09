import React from 'react';
import classes from './styles.module.scss';
import { Input, IconButton, Paragraph } from 'components';
import { useInput } from 'customHooks';
import { labels } from 'staticResources';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { Messages } from './Messages';

export const CurrentChat = ({ messages }) => {
    const currentTypedMessage = useInput('');

    // Add FlexContainer for every wrapper that has display flex

    return (
        <div className={classes['current-chat']}>
            {messages && (
                <div className={classes['type-message-wrapper']}>
                    <div className={classes['type-message__actions']}>
                        <IconButton icon={<AiOutlinePaperClip />} />
                        <IconButton icon={<BsEmojiSmile />} />
                        <IconButton icon={<BiMicrophone />} />
                    </div>

                    <Input
                        type="text"
                        /* onKeyDown={e => {
                        if (e.key === 'Enter') {
                            setMessages(prevMessages => [
                                {
                                    isFromUser: true,
                                    message: currentTypedMessage.value,
                                    id: 'message-id-3',
                                },
                                ...prevMessages,
                            ]);
                            currentTypedMessage.setValue('');
                        }
                    }} */
                        label={labels.writeAmessage}
                        removeLabel={true}
                        removeValidation={true}
                        value={currentTypedMessage.value}
                        onChange={currentTypedMessage.handleChange}
                        removeHoverEffect={true}
                        componentClasses={classes['type-message']}
                        componentInputClasses={classes['type-message__input']}
                    />
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
