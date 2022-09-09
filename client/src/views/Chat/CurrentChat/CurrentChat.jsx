import React, { useState, useId } from 'react';
import classes from './styles.module.scss';
import { Input, IconButton } from 'components';
import { useInput } from 'customHooks';
import { labels } from 'staticResources';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';

import { Messages } from './Messages';

export const CurrentChat = () => {
    const currentTypedMessage = useInput('');

    const [messages, setMessages] = useState([
        {
            isFromUser: false,
            message: 'Hello1',
            id: 'message-id-1',
        },
        {
            isFromUser: false,
            message:
                'Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes 12345667777asdwadsdadwad',
            id: 'message-id-2',
        },
    ]);

    // Add FlexContainer for every wrapper that has display flex

    return (
        <div className={classes['current-chat']}>
            <div className={classes['type-message-wrapper']}>
                <div className={classes['type-message__actions']}>
                    <IconButton icon={<AiOutlinePaperClip />} />
                    <IconButton icon={<BsEmojiSmile />} />
                    <IconButton icon={<BiMicrophone />} />
                </div>
                <Input
                    type="text"
                    onKeyDown={e => {
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
                    }}
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
            <Messages messages={messages} />
        </div>
    );
};
