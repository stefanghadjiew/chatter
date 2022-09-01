import classes from './styles.module.scss';
import { FlexContainer } from 'containers';
import { Avatar, Paragraph } from 'components';
import { images } from 'assets';
import { TiTick } from 'react-icons/ti';
import { assignClasses } from 'utils';

export const List = ({
    listItems,
    handleAddUsersToChannel = null,
    listItemRefs = null,
    componentClasses,
}) => {
    //make handleAddUsersToChannel append only the first name of the user
    //listItemRefs is an optional property

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
                    ref={
                        listItemRefs
                            ? el =>
                                  (listItemRefs.current = [
                                      ...listItemRefs.current,
                                      el,
                                  ])
                            : null
                    }
                    key={listItem + i}
                    className={classes['list__item']}
                    onClick={
                        handleAddUsersToChannel
                            ? () => {
                                  handleAddUsersToChannel(
                                      `${listItem.name} ${listItem.lastName}`
                                  );

                                  listItemRefs?.current[
                                      i
                                  ].classList.toggle(
                                      classes['list__item--added']
                                  );
                              }
                            : null
                    }
                >
                    <Avatar imgSrc={images.birdChat} />
                    {listItemRefs?.current[i]?.classList.contains(
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
            componentClasses={[
                assignClasses(componentClasses),
                classes['list-container'],
            ]}
        >
            <ul className={classes['full-container-size']}>
                {renderListItems}
            </ul>
        </FlexContainer>
    );
};
