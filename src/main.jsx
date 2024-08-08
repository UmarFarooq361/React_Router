import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { GithubInfoLoader }  from './components/Github/Github';
import './index.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layouts />,
//     children: [
//       {
//         // index: true,
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element= {<Layouts/>}>
        <Route path='' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/user/:id' element= {<User/>}/>
        <Route 
          loader={GithubInfoLoader}
          path='/github' 
          element= {<Github/>}
        />
    </Route>
  )

);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
