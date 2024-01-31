import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUserProfile from '../DashBoard/UserProfileHook';

const LogoutPage = () => {
    const history = useHistory();
    const { clearUserData } = useUserProfile();

    useEffect(() => {
        // Clear user data upon logout
        clearUserData();

        // Remove tokens from localStorage or cookies
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Cookies.remove('access_token');
        // Cookies.remove('refresh_token');

        // Redirect to the login page
        history.push('/login');
    }, [clearUserData, history]);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
};

export default LogoutPage;
