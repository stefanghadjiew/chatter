import { useRef } from 'react';
import { FlexContainer } from 'containers';
import { List } from 'views/Chat/List';
import {
    Input,
    FramerMotionAnimation,
    animationTypes,
    Button,
    Paragraph,
} from 'components';
import { useInput } from 'customHooks';
import classes from './styles.module.scss';
import { filterUserFriends } from 'utils';
import { AnimatePresence } from 'framer-motion';
import { useOutsideClick } from 'customHooks';

export const ShareThisContact = ({
    isOpen,
    userContacts,
    onClose /* , handleUserContactClick */,
}) => {
    //still need to create the handler -> needs to swap this component for a confirmation dialog
    const shareThisContactRef = useRef(null);
    useOutsideClick(shareThisContactRef, () => {
        onClose();
    });
    const { value: searchQuery, handleChange: handleSearchQueryChange } =
        useInput('');
    const filteredUserContacts = filterUserFriends(
        searchQuery,
        userContacts
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <FramerMotionAnimation
                    ref={shareThisContactRef}
                    componentClasses={classes['height-auto']}
                    animationVariant={animationTypes.insideOut}
                    animationDuration={0.2}
                >
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={classes['share-contact']}
                    >
                        <FlexContainer
                            flexDirection="column"
                            componentClasses={
                                classes['share-contact__search']
                            }
                        >
                            <Paragraph
                                text="Choose recipient..."
                                componentClasses={classes['p-y-1']}
                            />
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchQueryChange}
                                variant="outlined"
                                label="Search"
                            />
                        </FlexContainer>
                        <List
                            listItems={
                                searchQuery
                                    ? filteredUserContacts
                                    : userContacts
                            }
                            withAnimation={true}
                        />
                        <FlexContainer
                            componentClasses={
                                classes['share-contact__actions']
                            }
                        >
                            <Button
                                text="Cancel"
                                size="small"
                                onClick={onClose}
                            />
                        </FlexContainer>
                    </FlexContainer>
                </FramerMotionAnimation>
            )}
        </AnimatePresence>
    );
};
