import { Link, useNavigate } from "react-router-dom";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import img from "../../../../public/images/signup.png";
import coverImg from "../../../../public/images/signup.png";
import CoverHead from "../../components/coverimage/CoverHead";
import app from "../../firsbase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAuth from "../../hook/auth/useAuth";
import { upLoadImage } from "../../components/utils/uploadImage";




const SignUp = () => {



    const {createUser, logOut} = useAuth();

    const navigate = useNavigate();


    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.files[0];
        const image = await upLoadImage(photo);
        console.log(image)
        console.log(image.data.display_url)
        const loadedImage = image.data.display_url
        console.log({email, name, password, loadedImage})
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...!',
                text: 'Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character!',
              })
        } else {
                await  createUser(email, password, name, loadedImage)
                        .then(result => {
                         console.log(result.user)
                     updateProfile(result.user, {
                        displayName: name,
                        photoURL: loadedImage,
                    })
                        .then(() => console.log('profile update'))
                        .catch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Created your Account successfully!',
                      })
                    logOut()
                        .then()
                        .catch()
                }).catch(error => {
                    console.log(error)
                })
            navigate(location?.state ? location.state : '/login');

        }


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
            <FavAndTitle title={'Bistro Boss | Sign Up'}></FavAndTitle>
            <div>
                <CoverHead title={'Sign Up your Account'} coverImg={coverImg}></CoverHead>
            </div>
            <div className="bg-base-200">
                <div className="hero min-h-screen w-[85%] mx-auto">
                    <div className="hero-content flex-col-reverse lg:flex-row gap-12">
                        <div className="text-center lg:text-left">
                            <img src={img} alt="sign up photo" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className='text-center pt-10 -mb-10'>
                                <h3 className='text-2xl font-bold'>Sign Up</h3>
                            </div>
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
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
                                    <input className="btn bg-[#51FF04] text-white" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className='text-center pb-10 space-y-4'>
                                <h3>Or Sign Up With</h3>
                                <div className='space-x-4'>
                                    <button onClick={handleGoogle} className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaGoogle className='text-[20px] text-green-600'></FaGoogle></button>
                                    <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaFacebookF className='text-[20px] text-blue-600'></FaFacebookF></button>
                                    <button className='w-[50px] h-[50px] rounded-full bg-[#00000027] p-4'><FaLinkedinIn className='text-[20px] text-blue-700'></FaLinkedinIn></button>
                                </div>
                                <p>Already Have Account? <span className='text-lg font-bold text-[#51FF04]'><Link to='/login'>Sign In</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;