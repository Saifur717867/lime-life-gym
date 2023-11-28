import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-1.jpg';
import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";



const TrainerDetail = () => {
    const details = useLoaderData();
    console.log(details)
    const { _id, name, loadedImage, expert, experience, day, description } = details;

    return (
        <div>
            <section>
                <FavAndTitle title={'Lime Life | Trainer Details'}></FavAndTitle>
                <CoverHead coverImg={img} title={'Details'}></CoverHead>
            </section>
            <section>
            <div className="w-[85%] mx-auto py-20">
            <div className="flex flex-col md:flex-row justify-center space-x-10">
                <div className="w-1/3">
                    <img className="w-full h-auto" src={loadedImage} alt="" />
                </div>
                <div className="space-y-4 w-1/2">
                    <h4>Trainer Name: {name}</h4>
                    <p>Expertise : {expert}</p>
                    <p>Year Of Experience: {experience}</p>
                    <p className="text-justify">{description}</p>
                    <div className="flex space-x-4">
                        <FaFacebook className="text-2xl cursor-pointer"></FaFacebook>
                        <FaTwitter className="text-2xl cursor-pointer"></FaTwitter>
                        <FaInstagram className="text-2xl cursor-pointer"></FaInstagram>
                    </div>
                    <div>
                    <Link to='/booked'><button className="btn bg-lime-400 border-transparent text-white">Available Time Slot: {day}</button></Link>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </div>
    );
};

export default TrainerDetail;