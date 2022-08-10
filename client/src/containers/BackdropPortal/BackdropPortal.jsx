import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import { usePortal } from 'customHooks';
import { ClickAwayListener } from './ClickAwayListener';
import { AnimatePresence } from 'framer-motion';

export const BackdropPortal = ({ portalState, children, component }) => {
    const [loaded, portalId] = usePortal();
    const { openBackdropPortal, setOpenBackdropPortal } = portalState;

    return loaded
        ? ReactDOM.createPortal(
              //AnimatePresence in the BackdropPortal will allow every child component in the container to have an exit animation and there is no need to wrape every FramerMotionAnimation component with it :)
              <AnimatePresence exitBeforeEnter>
                  {openBackdropPortal && (
                      <div className={classes['backdrop']}>
                          <ClickAwayListener
                              setOpenBackdropPortal={setOpenBackdropPortal}
                          >
                              {component}
                          </ClickAwayListener>
                      </div>
                  )}
              </AnimatePresence>,

              document.getElementById(portalId)
          )
        : null;
};
