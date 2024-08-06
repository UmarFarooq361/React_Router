import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts';
import Home from './components/Home/Home';
import About from './components/About/About';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        // index: true,
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
