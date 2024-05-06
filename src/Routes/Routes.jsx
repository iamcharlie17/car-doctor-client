import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Home/Services/ServiceDetails/Checkout/Checkout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/service-details/:id",
          element: <ServiceDetails/>,
          loader: ({params})=> fetch(`http://localhost:3100/services/${params.id}`)
        },
        {
          path: "/service/checkout/:id",
          element: <Checkout/>,
          loader: ({params})=> fetch(`http://localhost:3100/services/${params.id}`)
        }
      ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
  ]);

  export default router;