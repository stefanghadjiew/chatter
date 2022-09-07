import ReactDOM from 'react-dom';

import classes from './styles.module.scss';
import { usePortal } from 'customHooks';

import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from 'app/hooks';

//COMPONENTS BEING RENDERED BY THE PORTAL
import { SideMenu } from 'views/Chat/AllChats/SideMenu';
import { AddMembers } from 'views/Chat/NewGroupChat/AddMembers';
import { NewGroupChat } from 'views/Chat/NewGroupChat';
import { UserInfo } from 'views/Chat/CurrentChat/Message/UserInfo';

export const BackdropPortal = () => {
    const [loaded, portalId] = usePortal('backdrop', 2);
    const { isOpen, childComponent } = useAppSelector(
        state => state.backdropPortal
    );

    const COMPONENTS_IN_STORE = [
        'SideMenu',
        'AddMembers',
        'NewGroupChat',
        'UserInfo',
    ];

    const COMPONENTS = [
        {
            SideMenu: <SideMenu />,
        },
        {
            AddMembers: <AddMembers />,
        },
        {
            NewGroupChat: <NewGroupChat />,
        },
        {
            UserInfo: <UserInfo />,
        },
    ];

    let ComponentToRender = COMPONENTS_IN_STORE.includes(childComponent)
        ? COMPONENTS.filter(c => c[childComponent])[0][childComponent]
        : null;

    return loaded
        ? ReactDOM.createPortal(
              //AnimatePresence in the BackdropPortal will allow every child component in the container to have an exit animation and there is no need to wrap every FramerMotionAnimation component with it

              <AnimatePresence>
                  {isOpen && (
                      <div className={classes['backdrop']}>
                          {ComponentToRender}
                      </div>
                  )}
              </AnimatePresence>,
              document.getElementById(portalId)
          )
        : null;
};
