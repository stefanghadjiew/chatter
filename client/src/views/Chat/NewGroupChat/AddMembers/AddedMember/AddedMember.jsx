import { useState } from 'react';
import {
    Avatar,
    Paragraph,
    IconButton,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import classes from './styles.module.scss';
import { images } from 'assets';
import { GrFormClose } from 'react-icons/gr';
import { AnimatePresence } from 'framer-motion';

export const AddedMember = ({
    user,
    handleRemoveUserFromAddedUsers,
    listItemRefs,
    data: userFriendsList,
}) => {
    //imgSrc will become user.avatar (saved on the backend)

    const [isHovered, setIsHovered] = useState(false);
    const handleRemoveUserAndActiveClassFromAddedUsers = e => {
        e.stopPropagation();
        const currentUserIndexToRemoveAddedClassFrom =
            userFriendsList.findIndex(
                _user => `${_user.name} ${_user.lastName}` === user
            );
        listItemRefs.current[
            currentUserIndexToRemoveAddedClassFrom
        ].classList.remove('styles_list__item--added__Kx5yo');
        handleRemoveUserFromAddedUsers(user);
    };

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
                        animationVariant={animationTypes.rotateRightToLeft}
                        animationDuration={0.2}
                        componentClasses={classes['height-auto']}
                    >
                        <IconButton
                            onClick={
                                handleRemoveUserAndActiveClassFromAddedUsers
                            }
                            componentClasses={
                                classes['added-member__close-icon']
                            }
                            icon={<GrFormClose />}
                        />
                    </FramerMotionAnimation>
                ) : (
                    <FramerMotionAnimation
                        motionKey="added-member__avatar__animation"
                        animationVariant={animationTypes.rotateLeftToRight}
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
