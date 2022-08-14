import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import { usePortal } from 'customHooks';
import { ClickAwayListener } from './ClickAwayListener';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from 'app/hooks';

export const BackdropPortal = ({ portalState, component }) => {
    const [loaded, portalId] = usePortal('backdrop', 2);
    const { isOpen, childComponent } = useAppSelector(
        state => state.backdropPortal
    );

    return loaded
        ? ReactDOM.createPortal(
              //AnimatePresence in the BackdropPortal will allow every child component in the container to have an exit animation and there is no need to wrap every FramerMotionAnimation component with it
              <AnimatePresence exitBeforeEnter>
                  {isOpen && (
                      <div className={classes['backdrop']}>
                          <ClickAwayListener>
                              {childComponent}
                          </ClickAwayListener>
                      </div>
                  )}
              </AnimatePresence>,

              document.getElementById(portalId)
          )
        : null;
};
