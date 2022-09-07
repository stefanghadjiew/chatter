import { useRef } from 'react';
import { FlexContainer } from 'containers';
import { RiShareForwardLine } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineDelete, AiOutlineExport } from 'react-icons/ai';
import { FaRegHandPaper } from 'react-icons/fa';
import { TbRotateClockwise2 } from 'react-icons/tb';
import {
    FramerMotionAnimation,
    animationTypes,
    Paragraph,
} from 'components';
import { AnimatePresence } from 'framer-motion';
import classes from './styles.module.scss';
import { useOutsideClick } from 'customHooks';

export const KebabMenu = ({
    isKebabMenuOpen,
    setIsKebabMenuOpen,
    handleShareThisContact,
    handleEditContact,
    handleDeleteUserDialog,
    handleBlockUserDialog,
}) => {
    const kebabMenuRef = useRef(null);
    useOutsideClick(kebabMenuRef, () =>
        setIsKebabMenuOpen(!isKebabMenuOpen)
    );
    const kebabMenuItems = [
        {
            id: 0,
            text: 'Auto-Delete',
            icon: <TbRotateClockwise2 />,
        },
        {
            id: 1,
            text: 'Share this contact',
            icon: <RiShareForwardLine />,
            onClick: () => {
                setIsKebabMenuOpen(!isKebabMenuOpen);
                handleShareThisContact();
            },
        },
        {
            id: 2,
            text: 'Edit contact',
            icon: <VscEdit />,
            onClick: () => {
                setIsKebabMenuOpen(!isKebabMenuOpen);
                handleEditContact();
            },
        },
        {
            id: 3,
            text: 'Export chat history',
            icon: <AiOutlineExport />,
        },
        {
            id: 4,
            text: 'Delete contact',
            icon: <AiOutlineDelete />,
            onClick: () => {
                setIsKebabMenuOpen(!isKebabMenuOpen);
                handleDeleteUserDialog();
            },
        },
        {
            id: 5,
            text: 'Block user',
            icon: <FaRegHandPaper />,
            onClick: () => {
                setIsKebabMenuOpen(!isKebabMenuOpen);
                handleBlockUserDialog();
            },
        },
    ];

    const renderKebabMenuItems = kebabMenuItems.map((item, i) => (
        <FlexContainer
            key={item.id}
            onClick={item.onClick}
            componentClasses={[
                classes['p-x-1'],
                classes['p-y-small'],
                classes['kebab-menu__item'],
                classes['full-container-width'],
            ]}
        >
            {item.icon}
            <Paragraph
                text={item.text}
                /*  componentClasses={
                    i === fourthSectionItems.length - 1
                        ? classes['user-info__n-th-section--block-user']
                        : ''
                } */
            />
        </FlexContainer>
    ));

    return (
        <AnimatePresence>
            {isKebabMenuOpen && (
                <FramerMotionAnimation
                    ref={kebabMenuRef}
                    motionKey="kebab-menu-animation"
                    animationVariant={animationTypes.insideOut}
                    animationDuration={0.2}
                    componentClasses={[
                        classes['height-auto'],
                        classes['framer-motion'],
                    ]}
                >
                    <FlexContainer
                        flexDirection="column"
                        componentClasses={classes['kebab-menu']}
                    >
                        {renderKebabMenuItems}
                    </FlexContainer>
                </FramerMotionAnimation>
            )}
        </AnimatePresence>
    );
};
