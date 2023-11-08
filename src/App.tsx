import { useState } from 'react'

import './App.css'
import './assets/css/materialdesignicons.min.css'
import './assets/css/vendor.bundle.base.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider, } from 'react-query'

import Routes from "./components/Routes/Routes"

function App() {
  const queryClient = new QueryClient()
  const router = Routes();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
