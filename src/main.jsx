import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home} from './Screens/home/Home.jsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Payment } from './Screens/payment/Payment.jsx'
import { Parts } from './Screens/parts/Parts.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/pagamento",
    element: <Payment/>
  },
  {
    path: "/parts",
    element: <Parts/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
