import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Home/Services/ServiceDetails/Checkout/Checkout";
import Bookings from "../Pages/Home/Bookings/Bookings";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


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
          path: "/services/:id",
          element: <Checkout/>,
          loader: ({params})=> fetch(`http://localhost:3100/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute><Bookings/></PrivateRoute>
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