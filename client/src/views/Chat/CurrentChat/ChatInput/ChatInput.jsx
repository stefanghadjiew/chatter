import { Input } from 'components';
import { useInput } from 'customHooks';
import { labels } from 'staticResources';
import classes from './styles.module.scss';

export const ChatInput = () => {
    const currentTypedMessage = useInput('');

    return (
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
            placeholder={labels.writeAmessage}
            removeValidation={true}
            value={currentTypedMessage.value}
            onChange={currentTypedMessage.handleChange}
            removeHoverEffect={true}
            componentClasses={classes['type-message']}
            componentInputClasses={classes['type-message__input']}
        />
    );
};
