import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { clearAuthToken } from '../utils/local-storage';

const LogoutButton = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  function logOutHandler() {
    logout({ returnTo: window.location.origin });
    clearAuthToken();
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <li className="p-1 focus:bg-booklistBlue-dark text-center sm:text-left">
        <button
          className="font-semibold"
          type="button"
          onClick={() => logOutHandler()}
        >
          Log Out
        </button>
      </li>
    )
  );
};

export default LogoutButton;
