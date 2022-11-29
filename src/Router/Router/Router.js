import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Category from "../../Pages/Categories/Category";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from "../../Layout/DashboardLayout";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Categories from "../../Pages/Categories/Categories";
import NotFound from "../../Shared/NotFound/NotFound";
import AllUsers from "../../Pages/Dashboard/AllUsers";




const { createBrowserRouter } = require("react-router-dom");



export const router = createBrowserRouter([
    {
        path: '/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },

        {
            path:'/category',
            element: <Categories></Categories>
        },
       
        {
            path: '/blog',
            element: <Blog></Blog>
        },
       
        {
            path: '/categories/:id',
            element: <Category></Category>

        }
        
       ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    },
    {
        path: '*',
        element:<NotFound></NotFound>
    }

])