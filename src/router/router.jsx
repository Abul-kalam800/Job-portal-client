import { createBrowserRouter } from "react-router";
import Rootlayout from "../Layouts/Rootlayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/sign/Signin";

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
         }
        
        ],
  },
]);
