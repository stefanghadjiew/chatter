import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup, Login } from 'views';

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
        component: null,
    },
    Error: {
        component: null,
    },
};

export const AppRoutes = () => {
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
                element={siteMap.Chat.component}
            />
            <Route element={siteMap.Error.component} />
        </Routes>
    );
};
