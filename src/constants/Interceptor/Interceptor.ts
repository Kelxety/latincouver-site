import axios from 'axios';

import { BASE_ENDPOINT } from "../api/BaseEndpoint";
import { REFRESH_TOKEN } from "../api/jwt"
import { useNavigate } from 'react-router-dom';

const api = axios.create({ baseURL: BASE_ENDPOINT, });

const navigate = useNavigate();

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api


// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh');
        const response = await axios.post(`${BASE_ENDPOINT}/${REFRESH_TOKEN}`, { refreshToken });
        const { token } = response.data;

        localStorage.setItem('access', token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error: any) {
        // Handle refresh token error or redirect to login

        // Check if the access token and refresh token are expired or invalid
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh');
          navigate("auth/login"); // Redirect to login page
        } else {
          // Handle other errors
          throw new Error('Unhandled error'); // Throw an error exception
        }
      }
    }

    return Promise.reject(error);
  }
);