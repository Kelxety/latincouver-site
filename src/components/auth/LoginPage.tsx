import React, {
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/Latincouver_Color.png';
import axios from 'axios';
import { notification } from 'antd';
import { userStore } from '../../constants/api/services/userService';

interface credentials {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { addEmail } = userStore();

  const [credentials, setCredentials] =
    useState<credentials>({
      email: '',
      password: '',
    });

  const [isLoading, setIsLoading] =
    useState<boolean>(true);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/api/token/',
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { access, refresh } = response.data;

      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${access}`;

      notification.success({
        message: 'Successfully Login',
        description: 'Welcome',
      });
      addEmail(credentials.email);
      navigate('/');
    } catch (error) {
      notification.error({
        message: 'Failed to login',
        description: 'Invalid Credentials',
      });
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const checkedIfAlreadyLogged = () => {
      const token =
        localStorage.getItem('access') || '';
      if (
        localStorage.getItem('access') === null
      ) {
        navigate('/auth/login');
      }

      if (!token) {
        setIsLoading(false);
        return;
      }
      const decodedToken = JSON.parse(
        atob(token.split('.')[1])
      );
      const expirationTime = decodedToken.exp;
      if (Date.now() <= expirationTime * 1000) {
        navigate('/');
      }
      setIsLoading(false);
      return;
    };
    checkedIfAlreadyLogged();
  }, [navigate]);

  return (
    <>
      {!isLoading && (
        <div className='container-scroller d-flex'>
          <div className='container-fluid page-body-wrapper full-page-wrapper d-flex'>
            <div className='content-wrapper d-flex align-items-stretch auth auth-img-bg'>
              <div className='row flex-grow'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                  <div className='auth-form-transparent text-left p-3'>
                    <div className='brand-logo'>
                      <a href='/'>
                        <img
                          src={logo}
                          alt='logo'
                          width={'520px'}
                        />
                      </a>
                    </div>
                    <h4>Welcome back!</h4>

                    <form
                      onSubmit={handleSubmit}
                      className='pt-3'
                    >
                      <div className='flex items-center'>
                        <input
                          type='text'
                          name='email'
                          id='email'
                          value={
                            credentials.email
                          }
                          placeholder='Email...'
                          onChange={handleChange}
                          className='w-full rounded-lg py-2 inline-block px-2 my-2 mx-0 border-[1px] border-[#6640b2]/50 mb-3'
                        />
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='password'
                          name='password'
                          value={
                            credentials.password
                          }
                          placeholder='Enter password...'
                          onChange={handleChange}
                          className='w-full rounded-lg inline-block py-2 px-2 my-2 mx-0 border-[1px] border-[#6640b2]/50'
                        />
                      </div>
                      <button
                        type='submit'
                        className='py-1 rounded-lg px-5 my-2 mx-0 w-full inline-block bg-primary text-white'
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
                <div className='col-lg-6 login-half-bg d-none d-lg-flex flex-row'>
                  <p className='text-white font-weight-medium text-center flex-grow align-self-end'>
                    Copyright &copy;{' '}
                    {new Date().getFullYear()} All
                    rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
