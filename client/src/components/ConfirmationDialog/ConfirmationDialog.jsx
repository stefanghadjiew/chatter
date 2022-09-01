import { Fragment } from 'react';
import { FlexContainer } from 'containers';
import {
    Paragraph,
    Button,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { AnimatePresence } from 'framer-motion';
import classes from './styles.module.scss';
import { useAppSelector } from 'app/hooks';

export const ConfirmationDialog = () => {
    const { isOpen, title, confirmation, onConfirm, onClose } =
        useAppSelector(state => state.confirmationDialog);

    return (
        <Fragment>
            <AnimatePresence>
                {isOpen && (
                    <FramerMotionAnimation
                        motionKey="confirmation-dialog-animation"
                        animationVariant={animationTypes.insideOut}
                        animationDuration={0.2}
                        componentClasses={classes['height-auto']}
                    >
                        <FlexContainer
                            flexDirection="column"
                            componentClasses={
                                classes['confirmation-dialog']
                            }
                        >
                            <Paragraph text={title} />
                            <Paragraph text={confirmation} />
                            <FlexContainer
                                componentClasses={
                                    classes['confirmation-dialog__actions']
                                }
                            >
                                <Button
                                    text="Cancel"
                                    size="small"
                                    onClick={onClose}
                                />
                                <Button
                                    text="Confirm"
                                    size="small"
                                    onClick={onConfirm}
                                    componentClasses={
                                        classes[
                                            'confirmation-dialog__actions__confirm-btn'
                                        ]
                                    }
                                />
                            </FlexContainer>
                        </FlexContainer>
                    </FramerMotionAnimation>
                )}
            </AnimatePresence>
        </Fragment>
    );
};
