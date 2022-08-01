import { AppRoutes } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.module.scss';

export const App = () => {
    return (
        <Router>
            {/* <Navbar/> */}
            <AppRoutes />
            {/* <Footer/> */}
        </Router>
    );
};
