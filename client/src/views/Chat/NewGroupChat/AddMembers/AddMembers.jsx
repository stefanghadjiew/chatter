import { useMemo, useState, useRef } from 'react';
import { FlexContainer } from 'containers';
import {
    Button,
    H4,
    Input,
    Paragraph,
    FramerMotionAnimation,
    animationTypes,
} from 'components';
import { useAppDispatch } from 'app/hooks';
import { decrementStep } from 'features/stepper/stepperSlice';
import { closePortal } from 'features/backdropPortal/backdropPortalSlice';
import classes from './styles.module.scss';
import { List } from 'views/Chat/List';
import { useInput, useScrollToBottom, useOutsideClick } from 'customHooks';
import { filterUserFriends } from 'utils';
import { AddedMember } from './AddedMember';
import { AnimatePresence } from 'framer-motion';

//TO BE REMOVED
import { userFriends } from './dummyData';

export const AddMembers = ({ isContacts }) => {
    //TODO: Moove this to the common folder

    const dispatch = useAppDispatch();
    const componentRef = useRef(null);
    const listItemRefs = useRef([]);
    const { value: filterValue, handleChange: handleFilterChange } =
        useInput('');

    const [usersToBeAddedToChannel, setUsersToBeAddedToChannel] = useState([]);

    const [pageEndRef] = useScrollToBottom({
        childrenOfElement: usersToBeAddedToChannel,
    });

    useOutsideClick(componentRef);

    const handleAddUsersToChannel = user => {
        if (usersToBeAddedToChannel.includes(user)) {
            return handleRemoveUserFromAddedUsers(user);
        }
        setUsersToBeAddedToChannel(prevState => [...prevState, user]);
    };

    const handleRemoveUserFromAddedUsers = user => {
        const userToBeRemovedIndex = usersToBeAddedToChannel.indexOf(user);

        setUsersToBeAddedToChannel(prevState => [
            ...prevState.slice(0, userToBeRemovedIndex),
            ...prevState.slice(userToBeRemovedIndex + 1),
        ]);
    };

    const data = useMemo(() => userFriends, []); // doing this for now just not to re-calculate the whole data array on every input change -> later this data will come from the server

    //TODO: REMEMBER THAT THE FRAMERMOTIONANIMATION COMPONENT NEEDS TO BE A DIRECT CHILD OF ANIMATEPRESENCE
    //TODO: IN ORDER FOR THE EXIT ANIMATIONS TO WORK !!!

    const filteredUserFriends = filterUserFriends(filterValue, data);
    const usersToBeAdded = usersToBeAddedToChannel.map((user, i) => (
        <FramerMotionAnimation
            motionKey={`${user}--added-member--animation`}
            key={user + i}
            animationVariant={animationTypes.insideOut}
            animationDuration={0.2}
            componentClasses={classes['height-auto']}
        >
            <AddedMember
                data={data}
                listItemRefs={listItemRefs}
                user={user}
                handleRemoveUserFromAddedUsers={handleRemoveUserFromAddedUsers}
            />
        </FramerMotionAnimation>
    ));

    return (
        <FlexContainer
            ref={componentRef}
            flexDirection="column"
            componentClasses={
                isContacts
                    ? classes['add-members-container--is-contacts']
                    : classes['add-members-container']
            }
        >
            <FlexContainer
                alignItems="center"
                componentClasses={classes['add-members-container__heading']}
            >
                <H4
                    text={isContacts ? 'Contacts' : 'Add Members'}
                    componentClasses={classes['m-r-1']}
                />
                {!isContacts && (
                    <Paragraph
                        text={`${usersToBeAddedToChannel.length} / 200000`}
                    />
                )}
            </FlexContainer>
            <Input
                value={filterValue}
                onChange={handleFilterChange}
                variant="outlined"
                label="Search"
                componentInputClasses={[classes['transparent']]}
                componentClasses={classes['search-input']}
            />

            <FlexContainer
                componentClasses={[
                    classes['m-b-1'],
                    classes['p-t-tiny'],
                    classes['p-b-tiny'],
                ]}
            >
                <ul className={classes['add-members-container__added-users']}>
                    <AnimatePresence>{usersToBeAdded}</AnimatePresence>
                    <div ref={pageEndRef} />
                </ul>
            </FlexContainer>
            <List
                listItemRefs={listItemRefs}
                listItems={filterValue ? filteredUserFriends : data}
                OnListItemClickHandler={handleAddUsersToChannel}
            />

            <FlexContainer
                justifyContent="flex-end"
                componentClasses={
                    isContacts
                        ? classes['add-members-container--is-contacts__actions']
                        : classes['add-members-container__actions']
                }
            >
                <Button
                    text={isContacts ? 'Add Contact' : 'Cancel'}
                    onClick={() => dispatch(decrementStep())}
                    size="small"
                    color="dark-primary"
                />
                <Button
                    text={isContacts ? 'Close' : 'Create'}
                    onClick={
                        isContacts
                            ? () => dispatch(closePortal())
                            : () => dispatch(decrementStep())
                    }
                    size="small"
                    color="dark-primary"
                />
            </FlexContainer>
        </FlexContainer>
    );
};
