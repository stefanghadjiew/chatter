import { useRef } from 'react';
import { FlexContainer } from 'containers';
import {
    Paragraph,
    Button,
    Input,
    FramerMotionAnimation,
    Avatar,
    animationTypes,
} from 'components';
import { useAppSelector } from 'app/hooks';
import { AnimatePresence } from 'framer-motion';
import classes from './styles.module.scss';
import { images } from 'assets';
import { useInput } from 'customHooks';
import { useOutsideClick } from 'customHooks';

export const EditContact = ({ onConfirm, onClose }) => {
    const editContactRef = useRef(null);
    useOutsideClick(editContactRef, () => {
        onClose();
    });
    const { isOpen, phone, firstName, lastName } = useAppSelector(
        state => state.editUserDialog
    );
    const newFirstName = useInput(firstName);
    const newLastName = useInput(lastName);

    return (
        <AnimatePresence>
            {isOpen && (
                <FramerMotionAnimation
                    ref={editContactRef}
                    motionKey="edit-contact-animation"
                    animationVariant={animationTypes.insideOut}
                    animationDuration={0.2}
                    componentClasses={classes['height-auto']}
                >
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={classes['edit-contact']}
                    >
                        <Paragraph text="Edit contact name" />
                        <FlexContainer
                            componentClasses={[
                                classes['p-y-1'],
                                classes['flex-align-center'],
                            ]}
                        >
                            <Avatar
                                size="extra-large"
                                imgSrc={images.birdChat}
                            />
                            <FlexContainer
                                flexDirection="column"
                                componentClasses={[
                                    classes['p-l-1'],
                                    classes['edit-contact__phone'],
                                ]}
                            >
                                <Paragraph text={phone} />
                                <Paragraph text="last seen today at 9:06 PM" />
                            </FlexContainer>
                        </FlexContainer>
                        <FlexContainer
                            flexDirection="column"
                            componentClasses={[
                                classes['flex-gap-1'],
                                classes['m-t-1'],
                            ]}
                        >
                            <Input
                                variant="outlined"
                                value={newFirstName.value}
                                onChange={newFirstName.handleChange}
                                removeValidation={true}
                                label="First name"
                                componentClasses={
                                    classes['edit-contact__input']
                                }
                            />
                            <Input
                                variant="outlined"
                                value={newLastName.value}
                                onChange={newLastName.handleChange}
                                removeValidation={true}
                                label="Last name"
                                componentClasses={
                                    classes['edit-contact__input']
                                }
                            />
                        </FlexContainer>
                        <FlexContainer
                            componentClasses={
                                classes['edit-contact__actions']
                            }
                        >
                            <Button
                                text="Cancel"
                                size="small"
                                onClick={onClose}
                            />
                            <Button
                                onClick={onConfirm}
                                text="Confirm"
                                size="small"
                                componentClasses={
                                    classes[
                                        'edit-contact__actions__confirm-btn'
                                    ]
                                }
                            />
                        </FlexContainer>
                    </FlexContainer>
                </FramerMotionAnimation>
            )}
        </AnimatePresence>
    );
};
