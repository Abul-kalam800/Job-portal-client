import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/sign/Signin";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/Home/JobDetails";
import PrivetRouter from "../privetRoute/PrivetRouter";
import Applay from "../pages/Home/Applay";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
        { path: "/", index: true, Component: Home

         },
         {
            path:'/signin',
            Component:Signin
         },
         {
          path:'/register',
          Component:Register
         },
         {path:'/jobs/:id',
          Component:JobDetails,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
         },
         {
          path:'/apply/:id',
          element:<PrivetRouter><Applay></Applay></PrivetRouter>
         }
        
        ],
  },
]);
