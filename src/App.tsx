import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { BrowserRouter as Router, Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

import './App.css'
import './assets/css/materialdesignicons.min.css'
import './assets/css/vendor.bundle.base.css'


// import './assets/js/vendors/vendor.bundle.base.js'

import HomePage from './components/Home/HomePage'
import ErrorPage from './components/error/ErrorPage'
import EmployeeForms from './components/forms/EmployeeForms'

// auth
import LoginPage from "./components/auth/LoginPage"
import SideMenu from './components/Home/SideMenu'
import Navbar from './components/Home/Navbar'
import Footer from './components/Footer/Footer'


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
      <div className="container-scroller d-flex">
        <BrowserRouter><SideMenu/></BrowserRouter>
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <div className="content-wrapper">
              <RouterProvider router={router} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
