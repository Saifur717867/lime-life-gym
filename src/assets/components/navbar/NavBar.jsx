import { useRef, useState } from "react";
import logo from '../../../../public/images/logo.png';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/auth/useAuth";


const NavBar = () => {
    const [state, setState] = useState(false)
    const { user, logOut, loading } = useAuth();
    // const profileRef = useRef()
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    // console.log(user)

    const navigationUsers = [
        { title: "Dashboard", path: '/dashboard' },
        { title: "Analytics", path: '/analytics' },
        { title: "Profile", path: '/profile' },
        { title: "Settings", path: '/settings' },
    ]

    const navigation = [
        { title: "Home", path: '/' },
        { title: "Contact Us", path: '/contact' },
        { title: "Add Item", path: '/addItem' },
        { title: "Our shop", path: '/ourShop' },

    ]

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="fixed font-Cinzel z-20 uppercase font-bold  w-full bg-black bg-opacity-30">
            <nav className="border-b md:static md:text-sm md:border-none">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 text-white">
                    <div className="flex items-center justify-between md:block">
                        <Link to='/'>
                            <img className="w-[60px] h-[50px]" src={logo} alt="" />
                            <p>Lime Lite</p>
                        </Link>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <NavLink to={item.path} className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white underline py-3 px-6 rounded-lg bg-[#51FF04] block" : ""
                                            }>
                                                {item.title}</NavLink>
                                        </li>
                                    )
                                })
                            }
                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                                {
                                    user
                                        ?
                                        <>
                                            <div className="relative border-t lg:border-none">
                                                <div className="">
                                                    <button className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                                                        onClick={() => setState(!state)}
                                                    >
                                                        <img
                                                            src={user.photoURL}
                                                            className="w-full h-full rounded-full"
                                                        />
                                                    </button>
                                                </div>
                                                <ul className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                                                    {
                                                        navigationUsers.map((item, idx) => (
                                                            <li key={idx}>
                                                                <a className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3" href={item.path}>
                                                                    {item.title}
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                    <button onClick={handleSignOut} className="block py-3 px-4 font-medium text-center text-white bg-[#51FF04] hover:bg-lime-600 active:bg-lime-700 active:shadow-none rounded-lg shadow md:inline">Sign Out</button>
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <li>
                                            <NavLink to='/login' className="block py-3 px-4 font-medium text-center text-white bg-[#51FF04] hover:bg-lime-600 active:bg-lime-700 active:shadow-none rounded-lg shadow md:inline">Sign in</NavLink>
                                        </li>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;