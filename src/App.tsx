import { useState } from 'react'

import './App.css'
import './assets/css/materialdesignicons.min.css'
import './assets/css/vendor.bundle.base.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider, } from 'react-query'

import Routes from "./components/Routes/Routes"

import HomePageContainer from "./components/Home/HomePageContainer"
import ErrorPage from "./components/error/ErrorPage"
import HRContainer from "./components/HR/HRContainer"
import EmployeesContainer from './components/HR/Employees/EmployeesContainer'
import ProfileContainer from './components/HR/Employees/Profile/ProfileContainer'
import LoginPage from './components/auth/LoginPage'


const routerz = createBrowserRouter([
  {
    path: "/",
    element: <HomePageContainer />,
    errorElement: <ErrorPage />,
    children: [
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
    ]
  },
  {
    path: "auth/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  const queryClient = new QueryClient()
  const router = Routes();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerz} />
    </QueryClientProvider>
  )
}

export default App
