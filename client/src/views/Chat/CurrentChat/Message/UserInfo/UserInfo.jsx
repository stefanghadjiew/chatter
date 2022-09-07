import { useRef, useState } from 'react';
import { FlexContainer } from 'containers';
import {
    Paragraph,
    IconButton,
    Avatar,
    ConfirmationDialog,
    FramerMotionAnimation,
    animationTypes,
    DIALOG_TYPES,
} from 'components';
import classes from './styles.module.scss';
import { ImPhone } from 'react-icons/im';
import { IoMdClose, IoMdNotificationsOutline } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
    AiOutlineInfoCircle,
    AiOutlinePicture,
    AiOutlineVideoCamera,
    AiOutlineFile,
    AiOutlineGif,
    AiOutlineDelete,
} from 'react-icons/ai';
import { FiLink2 } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { images } from 'assets';
import { RiShareForwardLine } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { FaRegHandPaper } from 'react-icons/fa';
import { useAppDispatch } from 'app/hooks';
import {
    addConfirmation,
    setDialogType,
    addTitle,
    toggleDialog,
} from 'features/confirmationDialog/confirmationDialog';
import { toggleEditUserDialog } from 'features/editUser/editUserSlice';
import { EditContact } from './EditContact';
import { ShareThisContact } from './ShareThisContact';
import {
    removeChild,
    closePortal,
} from 'features/backdropPortal/backdropPortalSlice';
import { KebabMenu } from './KebabMenu';
import { useOutsideClick } from 'customHooks';

export const UserInfo = () => {
    const componentAnimationRef = useRef(null);
    const componentRef = useRef(null);
    const confirmationDialogContainerRef = useRef(null);
    const [isShareThisContactOpen, setIsShareThisContactOpen] =
        useState(false);
    const [isKebabMenuOpen, setIsKebabMenuOpen] = useState(false);
    const dispatch = useAppDispatch();
    useOutsideClick(componentAnimationRef);

    const handleDialogClose = () => {
        dispatch(toggleDialog());
        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const handleEditContactClose = () => {
        dispatch(toggleEditUserDialog());
        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const handleBlockUserDialog = () => {
        dispatch(addTitle('Block Username'));
        dispatch(
            addConfirmation(
                'Do you want to block <b>Username<b/> from messaging and calling you on Chatter ?'
            )
        );
        dispatch(setDialogType(DIALOG_TYPES.block));
        dispatch(toggleDialog());
        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const handleDeleteUserDialog = () => {
        dispatch(addTitle(''));
        dispatch(
            addConfirmation(
                'Are you sure you want to delete <b>Username</b> from your contact list ?'
            )
        );
        dispatch(setDialogType(DIALOG_TYPES.delete));
        dispatch(toggleDialog());
        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const handleEditContact = () => {
        dispatch(toggleEditUserDialog());

        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const handleShareThisContact = () => {
        setIsShareThisContactOpen(!isShareThisContactOpen);
        confirmationDialogContainerRef.current?.classList.toggle(
            classes['user-info__confirmation-dialog__container--open']
        );
    };

    const thirdSectionItems = [
        {
            id: 1,
            text: '1212 photos',
            icon: <AiOutlinePicture />,
            onClick: null,
        },
        {
            id: 2,
            text: '247 videos',
            icon: <AiOutlineVideoCamera />,
            onClick: null,
        },
        {
            id: 3,
            text: '12 files',
            icon: <AiOutlineFile />,
            onClick: null,
        },
        {
            id: 4,
            text: '78 shared links',
            icon: <FiLink2 />,
            onClick: null,
        },
        {
            id: 5,
            text: '12 voice messages',
            icon: <BiMicrophone />,
            onClick: null,
        },
        {
            id: 6,
            text: '493 GIFs',
            icon: <AiOutlineGif />,
            onClick: null,
        },
    ];

    const fourthSectionItems = [
        {
            id: 1,
            text: 'Share this contact',
            icon: <RiShareForwardLine />,
            onClick: handleShareThisContact,
        },
        {
            id: 2,
            text: 'Edit contact',
            icon: <VscEdit />,
            onClick: handleEditContact,
        },
        {
            id: 3,
            text: 'Delete contact',
            icon: <AiOutlineDelete />,
            onClick: handleDeleteUserDialog,
        },
        {
            id: 4,
            text: 'Block user',
            icon: (
                <FaRegHandPaper
                    className={
                        classes['user-info__n-th-section--block-user']
                    }
                />
            ),
            onClick: handleBlockUserDialog,
        },
    ];

    const renderThirdSection = thirdSectionItems.map(item => (
        <FlexContainer
            key={item.id}
            componentClasses={[
                classes['p-x-1'],
                classes['p-y-small'],
                classes['user-info__n-th-section--child'],
            ]}
        >
            {item.icon}
            <Paragraph text={item.text} />
        </FlexContainer>
    ));

    const renderFourthSection = fourthSectionItems.map((item, i) => (
        <FlexContainer
            key={item.id}
            onClick={item.onClick}
            componentClasses={[
                classes['p-x-1'],
                classes['p-y-small'],
                classes['user-info__n-th-section--child'],
            ]}
        >
            {item.icon}
            <Paragraph
                text={item.text}
                componentClasses={
                    i === fourthSectionItems.length - 1
                        ? classes['user-info__n-th-section--block-user']
                        : ''
                }
            />
        </FlexContainer>
    ));

    const userFriendsList = [
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
    //TODO: Add FramerMotionAnimation
    return (
        <FramerMotionAnimation
            ref={componentAnimationRef}
            animationVariant={animationTypes.insideOut}
            animationDuration={0.2}
            componentClasses={classes['user-info']}
            motionKey="user-info-animation"
        >
            <FlexContainer flexDirection="column" ref={componentRef}>
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['user-info__header-wrapper']}
                >
                    <FlexContainer
                        componentClasses={classes['user-info__header']}
                    >
                        <Paragraph text="User Info" />
                        <FlexContainer>
                            <IconButton icon={<ImPhone />} />
                            <IconButton
                                icon={<BsThreeDotsVertical />}
                                onClick={() => {
                                    setIsKebabMenuOpen(!isKebabMenuOpen);
                                }}
                            />
                            <IconButton
                                icon={<IoMdClose />}
                                onClick={() => {
                                    dispatch(removeChild());
                                    dispatch(closePortal());
                                }}
                            />
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer
                        componentClasses={[
                            classes['p-x-1'],
                            classes['p-t-2'],
                            classes['flex-align-center'],
                        ]}
                    >
                        <Avatar
                            imgSrc={images.birdChat}
                            size="extra-large"
                        />
                        <FlexContainer
                            flexDirection="column"
                            componentClasses={classes['p-l-1']}
                        >
                            <Paragraph
                                text="Username"
                                componentClasses={
                                    classes['user-info__header__username']
                                }
                            />
                            <Paragraph
                                text="last seen today at 11:00 PM"
                                componentClasses={
                                    classes[
                                        'user-info__header__user-last-seen'
                                    ]
                                }
                            />
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['user-info__second-section']}
                >
                    <FlexContainer
                        componentClasses={
                            classes['user-info__second-section__mobile']
                        }
                    >
                        <AiOutlineInfoCircle />
                        <FlexContainer flexDirection="column">
                            <Paragraph text="+359 884703361" />
                            <Paragraph text="Mobile" />
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer
                        componentClasses={
                            classes[
                                'user-info__second-section__notifications'
                            ]
                        }
                    >
                        <IoMdNotificationsOutline />

                        <Paragraph text="Notifications" />
                    </FlexContainer>
                    <FlexContainer
                        componentClasses={
                            classes[
                                'user-info__second-section__notifications'
                            ]
                        }
                    >
                        <Paragraph
                            text="SEND MESSAGE"
                            componentClasses={
                                classes[
                                    'user-info__second-section__notifications--send-message'
                                ]
                            }
                        />
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['user-info__n-th-section']}
                >
                    {renderThirdSection}
                </FlexContainer>
                <FlexContainer
                    flexDirection="column"
                    componentClasses={classes['user-info__n-th-section']}
                >
                    {renderFourthSection}
                </FlexContainer>
                <div
                    ref={confirmationDialogContainerRef}
                    className={
                        classes[
                            'user-info__confirmation-dialog__container'
                        ]
                    }
                >
                    <ConfirmationDialog
                        onConfirm={{
                            onDelete: () =>
                                console.log('delete handler called'),
                            onBlock: () =>
                                console.log('block handler called'),
                        }}
                        onClose={handleDialogClose}
                    />
                    <EditContact onClose={handleEditContactClose} />
                    <ShareThisContact
                        isOpen={isShareThisContactOpen}
                        userContacts={userFriendsList}
                        onClose={handleShareThisContact}
                    />
                </div>
                <KebabMenu
                    isKebabMenuOpen={isKebabMenuOpen}
                    setIsKebabMenuOpen={setIsKebabMenuOpen}
                    handleBlockUserDialog={handleBlockUserDialog}
                    handleDeleteUserDialog={handleDeleteUserDialog}
                    handleEditContact={handleEditContact}
                    handleShareThisContact={handleShareThisContact}
                />
            </FlexContainer>
        </FramerMotionAnimation>
    );
};
