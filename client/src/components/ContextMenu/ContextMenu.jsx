import { useAppSelector } from 'app/hooks';
import { AnimatePresence } from 'framer-motion';
import { Message } from './Message';
import { Channel } from './Channel';
import { CONTEXT_MENU_TYPES } from './contextMenuTypes';

export const ContextMenu = ({ isOpen }) => {
    const { type, anchorPoint } = useAppSelector(state => state.contextMenu);

    if (!isOpen) return;

    return (
        <AnimatePresence>
            {type === CONTEXT_MENU_TYPES.MESSAGE ? (
                <Message anchorPoint={anchorPoint} />
            ) : (
                <Channel anchorPoint={anchorPoint} />
            )}
        </AnimatePresence>
    );
};
