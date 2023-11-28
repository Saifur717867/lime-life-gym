import { Link, NavLink, Outlet } from "react-router-dom";
import img from '../../images/logo.png';
import { FaBook, FaFolder, FaList, FaShoppingCart, FaUsers } from "react-icons/fa";
import FavAndTitle from "../components/helmet/FavAndTitle";
import useAdmin from "../hook/useAdmin";
import useTrainerAuthor from "../hook/useTrainerAuthor";
import useAuth from "../hook/auth/useAuth";
import useSubscribers from "../hook/useSubscribers";


const DashboardLayout = () => {

    const { user } = useAuth();
    // console.log(user);
    const isUser = user.role == 'member';
    const [subscribers, loading, refetch] = useSubscribers();

    const [isAdmin] = useAdmin();
    const [isTrainer] = useTrainerAuthor();

    return (
        <div>
            <FavAndTitle title={'Lime Life | Dashboard'}></FavAndTitle>
            <div className="flex">
                <div className="w-1/6 min-h-screen bg-red-500">
                    <div className="flex justify-center">
                        <Link to='/'><img className="w-[100px] h-auto" src={img} alt="" /></Link>
                    </div>
                    <div className="text-white">
                        <ul className="space-y-2">
                            {
                                isAdmin && <>
                                    <li><NavLink to='/dashboard/allSubscriber' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaBook className="inline-block mr-2 text-2xl"></FaBook>
                                        All Subscriber
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/allTrainer' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaUsers className="inline-block mr-2 text-2xl"></FaUsers>
                                        All Trainers
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/appliedTrainer' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaList className="inline-block mr-2 text-2xl"></FaList>
                                        Applied Trainers
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/balance' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaShoppingCart className="inline-block mr-2 text-2xl"></FaShoppingCart>
                                        Balance
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/forum' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Add Forum
                                    </NavLink></li>
                                </>
                            }
                            {
                                isTrainer && <>
                                    <li><NavLink to='/dashboard/manageSlot' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaBook className="inline-block mr-2 text-2xl"></FaBook>
                                        Manage Slots
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/manageMember' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaUsers className="inline-block mr-2 text-2xl"></FaUsers>
                                        Manage Member
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/addClass' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaBook className="inline-block mr-2 text-2xl"></FaBook>
                                        Add Class
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/forum' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Add Forum
                                    </NavLink></li>
                                </>
                            }
                            {
                                isUser && <>
                                    <li><NavLink to='/dashboard/active' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Active Log
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/profile' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Profile Setting
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/recommendClass' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Recommend Classes
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/review' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block uppercase" : "py-3 px-6 uppercase"
                                    }>
                                        <FaFolder className="inline-block mr-2 text-2xl"></FaFolder>
                                        Review
                                    </NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;