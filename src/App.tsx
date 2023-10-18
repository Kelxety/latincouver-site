import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

import './App.css'
// import './assets/css/materialdesignicons.min.css'
import './assets/css/vendor.bundle.base.css'

import HomePage from './components/HomePage'
import ErrorPage from './components/error/ErrorPage'
import EmployeeForms from './components/forms/EmployeeForms'

// auth
import LoginPage from "./components/auth/LoginPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "auth/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/hr/employee',
    element: <EmployeeForms />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
