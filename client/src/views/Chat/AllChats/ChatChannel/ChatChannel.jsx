import { useRef } from 'react';
import { FlexContainer } from 'containers';
import { Paragraph, Avatar } from 'components';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import { images } from 'assets';
import { MdPeopleAlt } from 'react-icons/md'; // -> if the chat is a channel
import { useContextMenu } from 'customHooks';
import { CONTEXT_MENU_TYPES } from 'components/ContextMenu/contextMenuTypes';

export const ChatChannel = ({
    id,
    chatName,
    chatIndex,
    selectedChatIndex,
    setSelectedChatIndex,
}) => {
    const chatRef = useRef(null);

    useContextMenu(id, chatRef, CONTEXT_MENU_TYPES.CHANNEL, false, {
        forMessage: false,
        forChatChannel: true,
    });

    return (
        <Link to="#" className={classes['chat']} ref={chatRef} id={id}>
            <li
                className={[
                    classes['chat__channel'],
                    selectedChatIndex === chatIndex &&
                        classes['chat__channel--selected'],
                ].join(' ')}
                onClick={() => setSelectedChatIndex(chatIndex)}
            >
                <Avatar imgSrc={images.birdChat} />
                <FlexContainer
                    flexDirection="column"
                    componentClasses={[classes['m-l-1'], classes['flex-1']]}
                >
                    <FlexContainer
                        componentClasses={[classes['channel-name__container']]}
                        justifyContent="space-between"
                    >
                        <FlexContainer alignItems="center">
                            {chatIndex === 1 && <MdPeopleAlt />}
                            <Paragraph
                                text={chatName}
                                componentClasses={classes['channel-name']}
                            />
                        </FlexContainer>
                        <Paragraph text="10:51 PM" />
                    </FlexContainer>

                    <Paragraph
                        text="Person : last typed"
                        componentClasses={classes['last-message']}
                    />
                </FlexContainer>
            </li>
        </Link>
    );
};
