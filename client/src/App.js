import { AppRoutes } from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BackdropPortal, NotificationSystem } from 'containers';

import './index.module.scss';

export const App = () => {
    const queryClient = new QueryClient();

    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                {/* <Navbar/> */}
                <AppRoutes />
                {/* <Footer/> */}
                <BackdropPortal />
                <NotificationSystem />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Router>
    );
};
