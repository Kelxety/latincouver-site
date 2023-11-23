import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import axios from "axios";
import { Button } from "antd";

interface credentials {
  username: string,
  password: string
}

const LoginPage = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<credentials>({
    username: "",
    password: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/token/', credentials, {
        headers: {'Content-Type': 'application/json'},
        // withCredentials: true
      });
      // const { token, refreshToken } = response.data;
      const { access, refresh } = response.data;

      console.log(`JWT'S... ${access} ${refresh}`);
      // Store the tokens in localStorage or secure cookie for later use
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

      console.log('success..');
      navigate('/');

    } catch (error) {

      console.log("There's a problem in loggin in");
      console.log(error);

      // Handle login error
    }
  };




  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="container-scroller d-flex">
        <div className="container-fluid page-body-wrapper full-page-wrapper d-flex">
          <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            <div className="row flex-grow">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="auth-form-transparent text-left p-3">
                  <div className="brand-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <h4>Welcome back!</h4>
                  <h6 className="font-weight-light">Happy to see you again!</h6>
                  <form onSubmit={handleSubmit} className="pt-3">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={credentials.username}
                      onChange={handleChange}
                      className="w-full inline-block py-3 px-5 my-2 mx-0 border-2 border-[#6640b2] mb-3"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full inline-block py-3 px-5 my-2 mx-0 border-2 border-[#6640b2]"
                    />
                    <button type="submit" className="py-3 px-5 my-2 mx-0 w-full inline-block rounded-none bg-primary text-white">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 login-half-bg d-none d-lg-flex flex-row">
                <p className="text-white font-weight-medium text-center flex-grow align-self-end">
                  Copyright &copy; {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
