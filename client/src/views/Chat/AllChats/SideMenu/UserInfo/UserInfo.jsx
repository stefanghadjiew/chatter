import { useState } from 'react';
import { FlexContainer } from 'containers';
import { Paragraph, FramerMotionAnimation } from 'components';
import classes from './styles.module.scss';
import { IoIosArrowDown, IoIosAddCircle } from 'react-icons/io';
import { animationTypes } from 'staticResources';
import { AnimatePresence } from 'framer-motion';

export const UserInfo = ({ userName, userPhone }) => {
    const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);

    return (
        <FlexContainer flexDirection="column">
            <FlexContainer
                alignItems="center"
                justifyContent="space-between"
                componentClasses={[
                    classes['wrapper'],
                    classes['p-t-small'],
                    classes['p-b-small'],
                ]}
            >
                <FlexContainer flexDirection="column">
                    <Paragraph
                        text={userName}
                        componentClasses={classes['user-name']}
                    />
                    <Paragraph
                        text={userPhone}
                        componentClasses={classes['user-phone']}
                    />
                </FlexContainer>
                <IoIosArrowDown
                    onClick={e => {
                        e.stopPropagation();
                        setIsAddAccountOpen(prev => !prev);
                    }}
                    className={`${classes['icon']} ${
                        isAddAccountOpen && classes['icon--rotate']
                    }`}
                />
            </FlexContainer>

            <AnimatePresence exitBeforeEnter>
                {isAddAccountOpen && (
                    <FramerMotionAnimation
                        animation={animationTypes.topToBottom}
                        animationDuration={0.2}
                    >
                        <FlexContainer
                            alignItems="center"
                            componentClasses={[classes['add-account']]}
                        >
                            <figure className={classes['icon-wrapper']}>
                                <IoIosAddCircle />
                            </figure>
                            <Paragraph text="Add Account" />
                        </FlexContainer>
                    </FramerMotionAnimation>
                )}
            </AnimatePresence>
        </FlexContainer>
    );
};
