import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Signin from '../Pages/Signin';
import SignNew from '../Pages/SignNew';
import ShoppingCard from '../Pages/ShoppingCard';

 function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: `/Details/:id`,
          element:<Details/>,
        },
        {
          path: `/Signin`,
          element:<Signin/>,
        },
        {
          path: `/SignNew`,
          element:<SignNew/>,
        },
        {
          path: `/ShoppingCard`,
          element:<ShoppingCard/>,
        },
      ]);
  return (
    <div>
            <RouterProvider router={router} />
    </div>
  )
}

export default Router