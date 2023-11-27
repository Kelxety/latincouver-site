import React, { useEffect } from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import useRefreshAccessToken from './useRefreshAccessToken';

const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const refreshAccessTokenMutation =
    useRefreshAccessToken();

  const handleExpiredAccessToken = () => {
    const refresh_token = localStorage.getItem(
      'refresh_token'
    );

    if (refresh_token) {
      // Refresh the access token and redirect back to the current location
      refreshAccessTokenMutation.mutate(
        { refresh_token },
        {
          onSuccess: () => {
            navigate(location.pathname);
          },
          onError: () => {
            // Redirect to login page if refresh token is also expired
            navigate('/login');
          },
        }
      );
    } else {
      // Refresh token is not available, redirect to login page
      navigate('/login');
    }
  };

  useEffect(() => {
    // Check if the access token is expired
    const isExpired =
      new Date().getTime() >
      Number(
        localStorage.getItem(
          'access_token_expiration'
        )
      );
    if (isExpired) {
      handleExpiredAccessToken();
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
