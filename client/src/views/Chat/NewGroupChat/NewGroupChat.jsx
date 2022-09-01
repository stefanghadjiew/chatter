import { useEffect } from 'react';
import {
    FramerMotionAnimation,
    animationTypes,
    Input,
    Button,
} from 'components';
import { FlexContainer } from 'containers';
import { AiFillCamera } from 'react-icons/ai';
import classes from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { incrementStep, resetSteps } from 'features/stepper/stepperSlice';
import {
    removeChild,
    closePortal,
} from 'features/backdropPortal/backdropPortalSlice';
import { AddMembers } from './AddMembers';

export const NewGroupChat = () => {
    const dispatch = useAppDispatch();
    const { currentStep } = useAppSelector(state => state.stepper);

    useEffect(() => {
        dispatch(resetSteps());
    }, [dispatch]);

    return (
        <FramerMotionAnimation
            animationVariant={animationTypes.insideOut}
            animationDuration={0.3}
            componentClasses={classes['framer-animation']}
            motionKey="new-group-chat-animation"
        >
            {currentStep === 0 && (
                <FlexContainer
                    componentClasses={classes['create-group-chat']}
                    flexDirection="column"
                >
                    <FlexContainer
                        componentClasses={
                            classes['create-group-chat__input']
                        }
                        alignItems="center"
                    >
                        <AiFillCamera />
                        <Input
                            placeholder="Group chat"
                            removeLabel={true}
                            removeOutline={true}
                        />
                    </FlexContainer>
                    <FlexContainer
                        justifyContent="flex-end"
                        componentClasses={
                            classes['create-group-chat__actions']
                        }
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
                            onClick={() => dispatch(incrementStep())}
                            text="Next"
                            size="small"
                            color="dark-primary"
                        />
                    </FlexContainer>
                </FlexContainer>
            )}

            {currentStep === 1 && <AddMembers />}
        </FramerMotionAnimation>
    );
};
