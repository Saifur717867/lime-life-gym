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
import AddTrainer from "../pages/trainer/AddTrainer";
import TrainerDetail from "../pages/trainer/TrainerDetail";
import Booked from "../pages/trainer/Booked";
import Payment from "../pages/payment/Payment";
import Classes from "../pages/classes/Classes";
import Forum from "../pages/forum/Forum";
import DashboardLayout from "../layout/DashboardLayout";
import Subscriber from "../pages/dashboard/Subscriber";
import AllTrainer from "../pages/dashboard/AllTrainer";
import AppliedTrainer from "../pages/dashboard/AppliedTrainer";
import Balance from "../pages/dashboard/Balance";
import AddForum from "../pages/dashboard/AddForum";
import ManageMember from "../pages/dashboard/ManageMember";
import ManageSlot from "../pages/dashboard/ManageSlot";
import AddClass from "../pages/dashboard/AddClass";
import Active from "../pages/dashboard/Active";
import Profile from "../pages/dashboard/Profile";
import Recommend from "../pages/dashboard/Recommend";
import Review from "../pages/dashboard/Review";
import ClassDetails from "../pages/classes/ClassDetails";
import BlogDetails from "../pages/forum/BlogDetails";


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
                    element: <Trainer></Trainer>,
                    
                },
                {
                    path: '/trainers/:id',
                    element: <TrainerDetail></TrainerDetail>,
                    loader: ({params}) => fetch(`http://localhost:5000/trainers/${params.id}`)
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
                    path: '/classes/:id',
                    element: <ClassDetails></ClassDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
                },
                {
                    path: '/forum',
                    element: <Forum></Forum>
                },
                {
                    path: '/forums/:id',
                    element: <BlogDetails></BlogDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/forums/${params.id}`)
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
        },
        {
            path: 'dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children: [
                {
                    path: 'allSubscriber',
                    element: <Subscriber></Subscriber>,
                },
                {
                    path: 'allTrainer',
                    element: <AllTrainer></AllTrainer>
                },
                {
                    path: 'appliedTrainer',
                    element: <AppliedTrainer></AppliedTrainer>
                },
                {
                    path: 'balance',
                    element: <Balance></Balance>
                },
                // Trainer Dashboard 
                {
                    path: 'manageSlot',
                    element: <ManageSlot></ManageSlot>
                },
                {
                    path: 'manageMember',
                    element: <ManageMember></ManageMember>
                },
                {
                    path: 'addClass',
                    element: <AddClass></AddClass>
                },
                {
                    path: 'forum',
                    element: <AddForum></AddForum>
                },
                // User Dashboard
                {
                    path: 'active',
                    element: <Active></Active>
                },
                {
                    path: 'profile',
                    element: <Profile></Profile>
                },
                {
                    path: 'recommendClass',
                    element: <Recommend></Recommend>
                },
                {
                    path: 'review',
                    element: <Review></Review>
                },
            ]
        },
    ]
)

export default router;