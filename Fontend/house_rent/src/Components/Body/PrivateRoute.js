import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Check if the user is authenticated
const isAuthenticated = () => {
    const accessTokens = localStorage.getItem('access_token');
    return accessTokens !== null;
};

// PrivateRoute component to protect the Dashboard route
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
