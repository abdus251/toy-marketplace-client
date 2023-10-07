import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookedToys from "../pages/BookedToys/BookedToys";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },


      {
        path: 'bookedToys',
        element: <PrivateRoute><BookedToys></BookedToys></PrivateRoute>
      },
      {
        path: 'addToy/:id',
        element: <AddToy></AddToy>,
        loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);


export default router;