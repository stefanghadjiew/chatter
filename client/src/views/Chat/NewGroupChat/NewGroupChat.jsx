import { useEffect, useRef } from 'react';
import { FramerMotionAnimation, animationTypes } from 'components';
import classes from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetSteps } from 'features/stepper/stepperSlice';
import { AddMembers } from './AddMembers';
import { CreateChat } from '../common/CreateChat';
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
            {currentStep === 0 && <CreateChat />}

            {currentStep === 1 && <AddMembers />}
        </FramerMotionAnimation>
    );
};
