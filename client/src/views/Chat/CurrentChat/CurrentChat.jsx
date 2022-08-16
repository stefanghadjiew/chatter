import React from 'react';
import classes from './styles.module.scss';
import { Input, IconButton, Avatar, Paragraph } from 'components';
import { FlexContainer } from 'containers';
import { useInput } from 'customHooks';
import { labels } from 'staticResources';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import { images } from 'assets';

export const CurrentChat = () => {
    const currentTypedMessage = useInput('');

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
            <div className={classes['chat-messages']}>
                <FlexContainer
                    alignItems="center"
                    componentClasses={
                        classes['chat-messages__inner-container']
                    }
                >
                    <Avatar
                        size="medium"
                        imgSrc={images.birdChat}
                        componentClasses={classes['chat-messages__avatar']}
                    />
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={
                            classes['chat-messages__message']
                        }
                    >
                        <Paragraph text="Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes Hello1, kakvo stava pi4ovek kak sme dnes 12345667777asdwadsdadwad" />
                        <Paragraph
                            text="4:11 PM"
                            componentClasses={
                                classes['chat-messages__message__time']
                            }
                        />
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    alignItems="center"
                    componentClasses={
                        classes['chat-messages__inner-container']
                    }
                >
                    <Avatar
                        size="medium"
                        imgSrc={images.birdChat}
                        componentClasses={classes['chat-messages__avatar']}
                    />
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={
                            classes['chat-messages__message']
                        }
                    >
                        <Paragraph text="Hello1" />
                        <Paragraph
                            text="4:11 PM"
                            componentClasses={
                                classes['chat-messages__message__time']
                            }
                        />
                    </FlexContainer>
                </FlexContainer>
            </div>
        </div>
    );
};
