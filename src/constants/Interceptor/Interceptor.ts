import axios from 'axios';

import { BASE_ENDPOINT } from '../api/BaseEndpoint';
import {
  REFRESH_TOKEN,
  VERIFY_TOKEN,
} from '../api/jwt';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: BASE_ENDPOINT,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access');

    if (token) {
      // const response = await axios.post(`${BASE_ENDPOINT}/${VERIFY_TOKEN}`, { "token": token }, {
      //   headers: {'Content-Type': 'application/json'},
      // });
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

let refresh = false;
// Add a response interceptor
axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (
      error.response.status === 401 &&
      !refresh
    ) {
      refresh = true;

      console.log(
        localStorage.getItem('refresh')
      );

      const refreshToken =
        localStorage.getItem('refresh');
      const response = await axios.post(
        `${BASE_ENDPOINT}/${REFRESH_TOKEN}`,
        { refreshToken },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          // withCredentials: true
        }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer 
       ${response.data['access']}`;
        localStorage.setItem(
          'access',
          response.data.access
        );
        localStorage.setItem(
          'refresh',
          response.data.refresh
        );

        return axios(error.config);
      }
    }

    refresh = false;
    return error;
  }
);

// Add a response interceptor

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     // If the error status is 401 and there is no originalRequest._retry flag,
//     // it means the token has expired and we need to refresh it
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log("HAHAHAAHAHAHAHA");
//       try {
//         const refreshToken = localStorage.getItem('refresh');
//         const response = await axios.post(`${BASE_ENDPOINT}/${REFRESH_TOKEN}`, { refreshToken }, {
//           headers: {'Content-Type': 'application/json'}
//         });
//         const { access, refresh } = response.data;

//         // Retry the original request with the new token
//         originalRequest.headers.Authorization = `Bearer ${access}`;
//         localStorage.setItem('access', access);
//         localStorage.setItem('refresh', refresh);

//         return axios(originalRequest);

//       } catch (error: any) {
//         // Handle refresh token error or redirect to login

//         // Check if the access token and refresh token are expired or invalid
//         if (error.response.status === 401) {
//           const navigate = useNavigate();

//           localStorage.removeItem('token');
//           localStorage.removeItem('refresh');

//           navigate("auth/login"); // Redirect to login page
//         } else {
//           // Handle other errors
//           throw new Error('Unhandled error'); // Throw an error exception
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );
