import { useRef } from 'react';
import classes from './styles.module.scss';
import { FlexContainer } from 'containers';
import { Avatar, Paragraph } from 'components';
import { images } from 'assets';
import { TiTick } from 'react-icons/ti';

export const List = ({
    listItems,
    handleAddUsersToChannel,
    handleRemoveUserFromAddedUsers,
}) => {
    //make handleAddUsersToChannel append only the first name of the user

    let listItemRefs = useRef([]);

    const renderListItems =
        listItems.length === 0 ? (
            <Paragraph
                text="No users found"
                componentClasses={[
                    classes['full-container-size'],
                    classes['m-t-5'],
                    classes['text-center'],
                ]}
            />
        ) : (
            listItems.map((listItem, i) => (
                <li
                    ref={el =>
                        (listItemRefs.current = [
                            ...listItemRefs.current,
                            el,
                        ])
                    }
                    key={listItem + i}
                    className={classes['list__item']}
                    onClick={() => {
                        handleAddUsersToChannel(
                            `${listItem.name} ${listItem.lastName}`
                        );
                        listItemRefs.current[i].classList.toggle(
                            classes['list__item--added']
                        );
                    }}
                >
                    <Avatar imgSrc={images.birdChat} />
                    {listItemRefs.current[i]?.classList.contains(
                        classes['list__item--added']
                    ) && (
                        <TiTick
                            className={
                                classes['list__item--added__tick-icon']
                            }
                        />
                    )}
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={[
                            classes['m-l-1'],
                            classes['flex-1'],
                        ]}
                    >
                        <Paragraph
                            text={`${listItem.name} ${listItem.lastName}`}
                        />
                        <Paragraph
                            text={
                                listItem.isOnline ? (
                                    <span className={classes['online']}>
                                        online
                                    </span>
                                ) : (
                                    listItem.lastSeen
                                )
                            }
                        />
                    </FlexContainer>
                </li>
            ))
        );

    return (
        <FlexContainer
            flexDirection="column"
            componentClasses={classes['list-container']}
        >
            <ul className={classes['full-container-size']}>
                {renderListItems}
            </ul>
        </FlexContainer>
    );
};
