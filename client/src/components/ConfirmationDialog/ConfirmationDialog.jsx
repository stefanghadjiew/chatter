import { Fragment, useRef } from 'react';
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
import { DIALOG_TYPES } from 'components';
import { useOutsideClick } from 'customHooks';

export const ConfirmationDialog = ({
    onConfirm: { onDelete, onBlock },
    onClose,
}) => {
    const confirmationDialogRef = useRef(null);
    useOutsideClick(confirmationDialogRef, () => {
        onClose();
    });

    const { isOpen, title, confirmation, type } = useAppSelector(
        state => state.confirmationDialog
    );

    if (!Object.values(DIALOG_TYPES).includes(type)) return;

    return (
        <Fragment>
            <AnimatePresence>
                {isOpen && (
                    <FramerMotionAnimation
                        ref={confirmationDialogRef}
                        motionKey="confirmation-dialog-animation"
                        animationDuration={0.2}
                        animationVariant={animationTypes.insideOut}
                        componentClasses={classes['height-auto']}
                    >
                        <FlexContainer
                            flexDirection="column"
                            componentClasses={classes['confirmation-dialog']}
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
                                    onClick={
                                        type === DIALOG_TYPES.delete
                                            ? onDelete
                                            : onBlock
                                    }
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
