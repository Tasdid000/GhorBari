// UserProfileHook.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('Access token not found. User not authenticated.');
        }

        const response = await axios.get('http://127.0.0.1:8000/apiv1/user/userprofile/', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('User profile fetch error:', error.message);
        setError(error);
        setLoading(false);
      }
    };

    // Fetch user profile data only if access token is present
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  const clearUserData = () => {
    setUserData(null);
  };

  return { userData, loading, error, clearUserData };
};

export default useUserProfile;
