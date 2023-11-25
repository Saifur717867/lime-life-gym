import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import LogIn from "../pages/login/LogIn";
import Dashboard from "../pages/dashboard/Dashboard";
import Contact from "../pages/contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import Trainer from "../pages/trainer/Trainer";
import AddTrainer from "../pages/additem/AddTrainer";
import TrainerDetail from "../pages/trainer/TrainerDetail";
import Booked from "../pages/trainer/Booked";
import Payment from "../pages/payment/Payment";
import Classes from "../pages/classes/Classes";


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
                    path: '/trainer',
                    element: <Trainer></Trainer>
                },
                {
                    path: '/trainerDetail',
                    element: <TrainerDetail></TrainerDetail>
                },
                {
                    path: '/booked',
                    element: <Booked></Booked>
                },
                {
                    path: '/payment',
                    element: <Payment></Payment>
                },
                {
                    path: '/beTrainer',
                    element: <AddTrainer></AddTrainer>
                },
                {
                    path: '/gallery',
                    element: <Gallery></Gallery>
                },
                {
                    path: '/classes',
                    element: <Classes></Classes>
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