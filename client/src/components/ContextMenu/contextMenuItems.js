import { Paragraph } from 'components';
import { HiReply } from 'react-icons/hi';
import { BsPinAngle } from 'react-icons/bs';
import { TbArrowForwardUp } from 'react-icons/tb';
import {
    AiOutlineDelete,
    AiOutlineCheckCircle,
    AiOutlinePushpin,
    AiOutlineClear,
} from 'react-icons/ai';
import {
    MdOutlineModeEditOutline,
    MdOutlineMarkAsUnread,
} from 'react-icons/md';
import { VscUnmute } from 'react-icons/vsc';
import { IoArchiveOutline } from 'react-icons/io5';
import {
    messageContextMenuItems,
    channelContextMenuItems,
} from 'staticResources';

export const MESSAGE_MENU_ITEMS = [
    {
        text: <Paragraph text={messageContextMenuItems.reply} />,
        icon: <HiReply />,
        onClick: null,
    },
    {
        text: <Paragraph text={messageContextMenuItems.pin} />,
        icon: <BsPinAngle />,
        onClick: null,
    },
    {
        text: <Paragraph text={messageContextMenuItems.forward} />,
        icon: <TbArrowForwardUp />,
        onClick: null,
    },
    {
        text: <Paragraph text={messageContextMenuItems.delete} />,
        icon: <AiOutlineDelete />,
        onClick: null,
    },
    {
        text: <Paragraph text={messageContextMenuItems.select} />,
        icon: <AiOutlineCheckCircle />,
        onClick: null,
    },
];

export const MESSAGE_MENU_ITEMS_FOR_USER = [
    MESSAGE_MENU_ITEMS[0],
    {
        text: <Paragraph text={messageContextMenuItems.edit} />,
        icon: <MdOutlineModeEditOutline />,
        onClick: null,
    },
    ...MESSAGE_MENU_ITEMS.slice(1, MESSAGE_MENU_ITEMS.length),
];

export const CHANNEL_MENU_ITEMS = [
    {
        text: <Paragraph text={channelContextMenuItems.archive} />,
        icon: <IoArchiveOutline />,
        onClick: null,
    },
    {
        text: <Paragraph text={channelContextMenuItems.pin} />,
        icon: <AiOutlinePushpin />,
        onClick: null,
    },
    {
        text: <Paragraph text={channelContextMenuItems.unmute} />,
        icon: <VscUnmute />,
        onClick: null,
    },
    {
        text: <Paragraph text={channelContextMenuItems.markAsUnread} />,
        icon: <MdOutlineMarkAsUnread />,
        onClick: null,
    },
    {
        text: <Paragraph text={channelContextMenuItems.clearHistory} />,
        icon: <AiOutlineClear />,
        onClick: null,
    },
    {
        text: <Paragraph text={channelContextMenuItems.deleteChat} />,
        icon: <AiOutlineDelete />,
        onClick: null,
    },
];
