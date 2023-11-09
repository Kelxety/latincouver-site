import React from 'react'

import { createBrowserRouter } from 'react-router-dom'

import HomePageContainer from "../Home/HomePageContainer"
import DashboardContainer from "../Dashboard/DashboardContainer"

// HR module
import HRContainer from "../HR/HRContainer"
import EmployeesContainer from "../HR/Employees/EmployeesContainer"
import ProfileContainer from "../HR/Employees/Profile/ProfileContainer"
import VolunteerContainer from "../HR/Volunteers/VolunteerContainer"

// Auth
import LoginPage from "../auth/LoginPage"

import ErrorPage from "../error/ErrorPage"

const Routes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePageContainer />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <DashboardContainer/>
            },
            {
              path: "hr",
              element: <HRContainer />,
            },
            {
              path: "hr/employees",
              element: <EmployeesContainer />,
            },
      
            {
              path: "hr/employee/profile",
              element: <ProfileContainer />,
            },
            {
              path: "hr/volunteers",
              element: <VolunteerContainer />,
            },
          ]
        },
        {
          path: "auth/login",
          element: <LoginPage />,
          errorElement: <ErrorPage />
        },
    ]);

    return router;
}

export default Routes