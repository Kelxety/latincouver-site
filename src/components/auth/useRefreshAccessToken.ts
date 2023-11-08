import { useMutation } from 'react-query';

interface RefreshAccessTokenData {
  refresh_token: string;
}

const useRefreshAccessToken = () => {
  const mutation = useMutation(async (data: RefreshAccessTokenData) => {
    // Send a POST request to the refresh token endpoint
    const response = await fetch(`http://localhost:8000/api/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      // Update the access token in local storage
      const { access_token }: any = response.json();
      localStorage.setItem('access_token', access_token);

      return access_token;
    } else {
      // Handle error
      console.error('Failed to refresh access token');
    }
  });

  return mutation;
};

export default useRefreshAccessToken;