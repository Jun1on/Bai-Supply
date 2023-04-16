import React from 'react'
import ErrorPage from "./error-page";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Vault from "./vault";
import About from "./about";
import Swap from "./swap";
import Stake from "./stake";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "vaults/",
    element: <Vault/>,
  },
  {
    path: "about/",
    element: <About/>,
  },
  {
    path: "swap/",
    element: <Swap/>,
  }, 
  {
    path: "stake/",
    element: <Stake/>,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
