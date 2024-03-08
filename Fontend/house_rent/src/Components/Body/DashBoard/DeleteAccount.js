import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const AccountSettings = () => {
  const history = useHistory();
  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete(
        'http://127.0.0.1:8000/apiv1/user/delete_user/',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );

      console.log(response.data);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      history.push('/Add_Property');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div>
      <button className='buttonuser' onClick={handleDeleteAccount}>
        Delete Account
      </button>
    </div>
  );
};

export default AccountSettings;
