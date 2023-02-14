import React from 'react';
import './App.css';
import { Badge, Box } from '@chakra-ui/react';
import Cards from './components/Card/Card';
import { Flex, Spacer } from '@chakra-ui/react';
import Navbar from './components/Card/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import MyOrder from './Pages/MyOrder';
import PlaceOrder from './Pages/PlaceOrder';
const App: React.FC = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

 const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="place" element={<PlaceOrder />} />
        <Route
          path="myorder"
          element={<MyOrder />}
          loader={({ request }) =>
            fetch("/api/dashboard.json", {
              signal: request.signal,
            })
          }
        />
        {/* <Route element={<AuthLayout />}>
          <Route
            path="login"
            element={<Login />}
            loader={redirectIfUser}
          />
          <Route path="logout" />
        </Route> */}
      </Route>
    )
  );
  
  return (
    
      <RouterProvider router={router}/>
     
  );
};

export default App;
