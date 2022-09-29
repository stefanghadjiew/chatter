import { FlexContainer } from 'containers';
import { Button, Input } from 'components';
import { useAppDispatch } from 'app/hooks';
import classes from './styles.module.scss';
import {
    removeChild,
    closePortal,
} from 'features/backdropPortal/backdropPortalSlice';
import { incrementStep } from 'features/stepper/stepperSlice';
import { AiFillCamera } from 'react-icons/ai';

export const CreateChat = ({ isForNewChannel }) => {
    const dispatch = useAppDispatch();

    const handleConfirmation = isForNewChannel
        ? () => {
              console.log('Create channel clicked');
          }
        : () => {
              dispatch(incrementStep());
          };

    return (
        <FlexContainer
            componentClasses={classes['create-group-chat']}
            flexDirection="column"
        >
            <FlexContainer
                componentClasses={classes['create-group-chat__input']}
                alignItems="center"
            >
                <AiFillCamera />
                <Input
                    variant="outlined"
                    label={isForNewChannel ? 'Channel name' : 'Group chat'}
                />
            </FlexContainer>
            <FlexContainer
                justifyContent="flex-end"
                componentClasses={classes['create-group-chat__actions']}
            >
                <Button
                    text="Cancel"
                    size="small"
                    color="dark-primary"
                    onClick={() => {
                        dispatch(removeChild());
                        dispatch(closePortal());
                    }}
                />
                <Button
                    onClick={handleConfirmation}
                    text={isForNewChannel ? 'Create' : 'Next'}
                    size="small"
                    color="dark-primary"
                />
            </FlexContainer>
        </FlexContainer>
    );
};
