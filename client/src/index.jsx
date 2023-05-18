import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Product, { loader as productLoader } from './components/App';
import Root from './routes/root';

// using createHashRouter until api routes are fixed because of conflicting names
const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // placeholder until landing page is made
      {
        index: true,
        element: <Product />,
        loader: productLoader,
      },
      // loads http://localhost:3000/#/products/40344 or any product id
      {
        path: '/products/:id',
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
