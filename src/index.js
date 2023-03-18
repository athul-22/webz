import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// PAGES
import App from './App';
import Home from './Home';
import Signin from './Signin'
import SuccessNavigate from './Components/SuccessNavigate';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "signin",
    element: <Signin/>
  },
  {
    path: "success",
    element: <SuccessNavigate/>
  }

]);


root.render(
  <GoogleOAuthProvider clientId="938054737950-90jhm2ntnupbngaf66rsg0k0b4qi6mkr.apps.googleusercontent.com
  " >
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode></GoogleOAuthProvider>
);

reportWebVitals();
