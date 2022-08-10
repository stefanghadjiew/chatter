import { useState } from 'react';
import { AppRoutes } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { BackdropPortal } from 'containers';
import { SideMenu } from 'views/Chat/AllChats/SideMenu';
import './index.module.scss';

export const App = () => {
    const [openBackdropPortal, setOpenBackdropPortal] = useState(false);

    return (
        <Router>
            {/* <Navbar/> */}
            <AppRoutes setOpenBackdropPortal={setOpenBackdropPortal} />
            {/* <Footer/> */}
            <BackdropPortal
                portalState={{ openBackdropPortal, setOpenBackdropPortal }}
                component={<SideMenu />}
            />
        </Router>
    );
};
