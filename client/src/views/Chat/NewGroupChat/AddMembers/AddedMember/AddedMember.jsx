import { useState } from 'react';
import {
    Avatar,
    Paragraph,
    IconButton,
    FramerMotionAnimation,
} from 'components';
import classes from './styles.module.scss';
import { images } from 'assets';
import { GrFormClose } from 'react-icons/gr';
import { animationTypes } from 'staticResources';
import { AnimatePresence } from 'framer-motion';

export const AddedMember = ({ user, handleRemoveUserFromAddedUsers }) => {
    //imgSrc will become user.avatar (saved on the backend)

    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={classes['added-member']}
        >
            <AnimatePresence initial={false}>
                {isHovered ? (
                    <FramerMotionAnimation
                        motionKey="added-member__close-button__animation"
                        animation={animationTypes.rotateRightToLeft}
                        animationDuration={0.2}
                        componentClasses={classes['height-auto']}
                    >
                        <IconButton
                            onClick={e => {
                                e.stopPropagation();
                                handleRemoveUserFromAddedUsers(user);
                            }}
                            componentClasses={
                                classes['added-member__close-icon']
                            }
                            icon={<GrFormClose />}
                        />
                    </FramerMotionAnimation>
                ) : (
                    <FramerMotionAnimation
                        motionKey="added-member__avatar__animation"
                        animation={animationTypes.rotateLeftToRight}
                        animationDuration={0.2}
                        componentClasses={classes['height-auto']}
                    >
                        <Avatar size="medium" imgSrc={images.birdChat} />
                    </FramerMotionAnimation>
                )}
            </AnimatePresence>

            <Paragraph text={user} />
        </li>
    );
};
