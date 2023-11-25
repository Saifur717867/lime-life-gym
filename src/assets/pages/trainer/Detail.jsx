import { Link } from "react-router-dom";
import img from '../../../images/gallary/photo-1.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Detail = () => {
    return (
        <div className="w-[85%] mx-auto py-20">
            <div className="flex flex-col md:flex-row justify-center space-x-10">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="space-y-4">
                    <h4>Name</h4>
                    <p>Skills tag: Yoga Specialist, Body Builder Expert</p>
                    <p>Year Of Experience: 7</p>
                    <p>Description</p>
                    <div className="flex space-x-4">
                        <FaFacebook className="text-2xl cursor-pointer"></FaFacebook>
                        <FaTwitter className="text-2xl cursor-pointer"></FaTwitter>
                        <FaInstagram className="text-2xl cursor-pointer"></FaInstagram>
                    </div>
                    <div>
                    <Link to='/booked'><button className="btn bg-lime-400 border-transparent text-white">Available Time Slot:5</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;