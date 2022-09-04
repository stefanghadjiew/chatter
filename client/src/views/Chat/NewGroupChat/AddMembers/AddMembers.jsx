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
import classes from './styles.module.scss';
import { List } from 'views/Chat/List';
import { useInput, useScrollToBottom } from 'customHooks';
import { filterUserFriends } from 'utils';
import { AddedMember } from './AddedMember';
import { AnimatePresence } from 'framer-motion';

export const AddMembers = () => {
    const dispatch = useAppDispatch();
    const listItemRefs = useRef([]);
    const { value: filterValue, handleChange: handleFilterChange } =
        useInput('');

    const [usersToBeAddedToChannel, setUsersToBeAddedToChannel] = useState(
        []
    );

    const [pageEndRef] = useScrollToBottom({
        childrenOfElement: usersToBeAddedToChannel,
    });

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

    const data = useMemo(() => {
        return [
            {
                name: 'Stefan',
                lastName: 'Hadzhiev',
                isOnline: true,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Hristo ',
                lastName: 'Karamanliev',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Hristo',
                lastName: 'Gergov',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'UniqueNameOne',
                lastName: 'One',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'UniqueNameTwo',
                lastName: 'Two',
                isOnline: true,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'UniqueNameThree',
                lastName: 'Three',
                isOnline: true,
                lastSeen: '',
            },
            {
                name: 'UniqueNameFour',
                lastName: 'Four',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Five',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Six',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Seven',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Eight',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Nine',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Ten',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Eleven',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Twelve',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Thirteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Fourteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Fifteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Sixteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Seventeen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Eighteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Nineteen',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Twenty',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
            {
                name: 'Test',
                lastName: 'Twentyone',
                isOnline: false,
                lastSeen: 'last seen yesterday at 3:30 PM',
            },
        ];
    }, []); // doing this for now just not to re-calculate the whole data array on every input change -> later this data will come from the server

    //add a class for handleAddUsersToChannel for each list item in the List component

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
                handleRemoveUserFromAddedUsers={
                    handleRemoveUserFromAddedUsers
                }
            />
        </FramerMotionAnimation>
    ));

    return (
        <FlexContainer
            flexDirection="column"
            componentClasses={classes['add-members-container']}
        >
            <FlexContainer
                alignItems="center"
                componentClasses={
                    classes['add-members-container__heading']
                }
            >
                <H4
                    text="Add Members"
                    componentClasses={classes['m-r-1']}
                />
                <Paragraph
                    text={`${usersToBeAddedToChannel.length} / 200000`}
                />
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
                <ul
                    className={
                        classes['add-members-container__added-users']
                    }
                >
                    <AnimatePresence>{usersToBeAdded}</AnimatePresence>
                    <div ref={pageEndRef} />
                </ul>
            </FlexContainer>
            <List
                listItemRefs={listItemRefs}
                listItems={filterValue ? filteredUserFriends : data}
                handleAddUsersToChannel={handleAddUsersToChannel}
            />

            <FlexContainer
                justifyContent="flex-end"
                componentClasses={
                    classes['add-members-container__actions']
                }
            >
                <Button
                    text="Cancel"
                    onClick={() => dispatch(decrementStep())}
                    size="small"
                    color="dark-primary"
                />
                <Button
                    text="Create"
                    onClick={() => dispatch(decrementStep())}
                    size="small"
                    color="dark-primary"
                />
            </FlexContainer>
        </FlexContainer>
    );
};
