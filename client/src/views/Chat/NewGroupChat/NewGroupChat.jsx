import { useEffect, useRef } from 'react';
import { FramerMotionAnimation, animationTypes } from 'components';
import classes from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetSteps } from 'features/stepper/stepperSlice';
import { AddMembers } from './AddMembers';
import { CreateGroupChat } from './CreateGroupChat';
import { useOutsideClick } from 'customHooks';

export const NewGroupChat = () => {
    const componentRef = useRef(null);
    const dispatch = useAppDispatch();
    const { currentStep } = useAppSelector(state => state.stepper);

    useOutsideClick(componentRef);

    useEffect(() => {
        dispatch(resetSteps());
    }, [dispatch]);

    return (
        <FramerMotionAnimation
            ref={componentRef}
            animationVariant={animationTypes.insideOut}
            animationDuration={0.3}
            componentClasses={classes['framer-animation']}
            motionKey="new-group-chat-animation"
        >
            {currentStep === 0 && <CreateGroupChat />}

            {currentStep === 1 && <AddMembers />}
        </FramerMotionAnimation>
    );
};
