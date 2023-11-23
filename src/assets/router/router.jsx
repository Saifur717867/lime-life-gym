import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import LogIn from "../pages/login/LogIn";
import Dashboard from "../pages/dashboard/Dashboard";
import Contact from "../pages/contact/Contact";
import AddItem from "../pages/additem/AddItem";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/addItem',
                    element: <AddItem></AddItem>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
                },
                {
                    path: '/signUp',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/login',
                    element: <LogIn></LogIn>
                },
            ]
        }
    ]
)

export default router;