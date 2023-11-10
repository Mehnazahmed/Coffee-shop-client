import { createBrowserRouter } from "react-router-dom";
import AddACoffee from "../Home/AddACoffee/AddACoffee";
import CoffeeSection from "../Home/CoffeeSection/CoffeeSection";
import ViewCoffee from "../Home/CoffeeSection/ViewCoffee";
import Home from "../Home/Home";
import UpdateCoffeeItem from "../Home/UpdateCoffeeItem/UpdateCoffeeItem";
import Main from "../Layouts/Main/Main";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children: [
        {
          path: '/',
          element: <Home></Home>,
          
        },
        {
          path: '/coffee',
          element:<CoffeeSection></CoffeeSection>
          
        },
        {
          path: '/addCoffee',
          element:<AddACoffee></AddACoffee>
        },
        {
          path: '/updateitem/:id',
          element:<UpdateCoffeeItem></UpdateCoffeeItem>,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/viewitem/:id',
          element:<ViewCoffee></ViewCoffee>,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        }
       

      ],
    },
  ]);
  

export default router;