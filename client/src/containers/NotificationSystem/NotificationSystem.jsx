import { usePortal } from 'customHooks';
import classes from './styles.module.scss';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Button, FramerMotionAnimation } from 'components';
import { addMessage } from 'features/notificationSystem/notificationSystemSlice';
import { MessageToast } from './MessageToast';
import { AnimatePresence } from 'framer-motion';
import { animationTypes } from 'staticResources';

export const NotificationSystem = () => {
    const [loaded, portalId] = usePortal('notification-system', 3);
    const dispatch = useAppDispatch();
    const { messages } = useAppSelector(state => state.notificationSystem);

    const renderMessages = messages?.map(message => (
        <FramerMotionAnimation
            animation={animationTypes.leftToRight}
            animationDuration={0.2}
            key={message.id}
            motionKey={message.id}
        >
            <MessageToast
                description={message.description}
                type={message.type}
                id={message.id}
            />
        </FramerMotionAnimation>
    ));

    return loaded
        ? ReactDOM.createPortal(
              <div className={classes['notification-system']}>
                  <AnimatePresence>{renderMessages}</AnimatePresence>
                  <Button
                      text="Add Toast"
                      onClick={() =>
                          dispatch(
                              addMessage({
                                  description: 'From button',
                                  type: 'success',
                              })
                          )
                      }
                  />
              </div>,
              document.getElementById(portalId)
          )
        : null;
};
