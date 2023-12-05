import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Tarefa from './Tarefa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'Tarefa',
    element: <Tarefa/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <div>

  

  <RouterProvider router={router}/>
   
 </div>
  
  
);



