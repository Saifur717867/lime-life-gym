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
import PrivateRouter from "./privateRouter";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";


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
                    loader: ({params}) => fetch(`https://b8a12-server-side-saifur717867.vercel.app/trainers/${params.id}`)
                },
                {
                    path: '/booked',
                    element: <PrivateRouter><Booked></Booked></PrivateRouter>
                },
                {
                    path: '/payment',
                    element: <Payment></Payment>
                },
                {
                    path: '/beTrainer',
                    element: <PrivateRouter><AddTrainer></AddTrainer></PrivateRouter>
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
                    loader: ({params}) => fetch(`https://b8a12-server-side-saifur717867.vercel.app/classes/${params.id}`)
                },
                {
                    path: '/forum',
                    element: <Forum></Forum>
                },
                {
                    path: '/forums/:id',
                    element: <BlogDetails></BlogDetails>,
                    loader: ({params}) => fetch(`https://b8a12-server-side-saifur717867.vercel.app/forums/${params.id}`)
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
            element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
            children: [
                {
                    path: 'allSubscriber',
                    element: <AdminRoute><Subscriber></Subscriber></AdminRoute>,
                },
                {
                    path: 'allTrainer',
                    element: <AdminRoute><AllTrainer></AllTrainer></AdminRoute>
                },
                {
                    path: 'appliedTrainer',
                    element: <AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>
                },
                {
                    path: 'balance',
                    element: <AdminRoute></AdminRoute>
                },
                // Trainer Dashboard 
                {
                    path: 'manageSlot',
                    element: <TrainerRoute><ManageSlot></ManageSlot></TrainerRoute>
                },
                {
                    path: 'manageMember',
                    element: <TrainerRoute><ManageMember></ManageMember></TrainerRoute>
                },
                {
                    path: 'addClass',
                    element: <TrainerRoute><AddClass></AddClass></TrainerRoute>
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