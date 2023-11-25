import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from "../../../images/signin.png";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import singInImg from "../../../images/signin.png";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firsbase/firebase.config";
import useAuth from "../../hook/auth/useAuth";


const LogIn = () => {
    const {logIn} = useAuth();

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Login Successfully!',
                })
                // console.log(result.data)
                if(loggedInUser){
                    navigate(location?.state ? location.state : '/')
                }
                // const user = {email};
                // // get access token 
                // axios.post('https://b8a11-server-side-saifur717867.vercel.app/jwt', user,
                // {withCredentials: true})
                // .then(res => {
                    
                //     }
                // })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Enter the right information!',

                })
            })
    }

    // sing in with google //

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const handleGoogle = () => {
        // console.log("logged in")
        signInWithPopup(auth, provider)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Login Successfully!',
                })
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <FavAndTitle title={'Bistro Boss | Sign In'}></FavAndTitle>
            <div>
                <CoverHead title={'Sign In your Account'} coverImg={img}></CoverHead>
            </div>
            <div className="hero-content flex-col lg:flex-row gap-12 w-[85%] mx-auto">
                <div className="">
                    <img src={singInImg} alt="sign in" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='text-center pt-10'>
                        <h3 className='text-2xl font-bold'>Sign In</h3>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#51FF04] text-white" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className='text-center pb-10 space-y-4'>
                        <h3>Or Sign Up With</h3>
                        <div className='space-x-4'>
                            <button onClick={handleGoogle} className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaGoogle className='text-[20px] text-green-600'></FaGoogle></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaFacebookF className='text-[20px] text-blue-600'></FaFacebookF></button>
                            <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaLinkedinIn className='text-[20px] text-blue-700'></FaLinkedinIn></button>
                        </div>
                        <p>Don't Have An Account? <span className='text-lg font-bold text-[#51FF04]'><Link to='/signUp'>Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;