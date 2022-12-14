import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Signup, Login, Chat } from 'views';

export const siteMap = {
    HomePage: {
        path: '/',
        component: <Signup />,
    },
    Signup: {
        path: '/signup',
        component: <Signup />,
    },
    Login: {
        path: '/login',
        component: <Login />,
    },
    Chat: {
        path: '/chat',
        component: <Chat />,
    },
    Error: {
        component: null,
    },
};

export const AppRoutes = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === siteMap.HomePage.path) {
            navigate(siteMap.Signup.path);
        }
        return;
    }, [pathname, navigate]);

    return (
        <Routes>
            <Route
                path={siteMap.HomePage.path}
                element={siteMap.HomePage.component}
            />
            <Route
                exact
                path={siteMap.Signup.path}
                element={siteMap.Signup.component}
            />
            <Route
                path={siteMap.Login.path}
                element={siteMap.Login.component}
            />
            <Route
                exact
                path={siteMap.Chat.path}
                element={/* siteMap.Chat.component */ <Chat />}
            />
            <Route element={siteMap.Error.component} />
        </Routes>
    );
};
