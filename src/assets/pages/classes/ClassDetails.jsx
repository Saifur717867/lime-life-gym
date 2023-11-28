import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-1.jpg';
import { Link, useLoaderData } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SomeClasses from "../home/SomeClasses";


const ClassDetails = () => {

    const details = useLoaderData();
    const { _id, email, name, userPicture, loadedImage, category, date, rating, title, description } = details;

    return (
        <div>
            <section>
                <FavAndTitle title={'Lime Life | Class Details'}></FavAndTitle>
                <CoverHead coverImg={img} title={'Class Details'}></CoverHead>
            </section>
            <section>
                <div className="w-[85%] mx-auto py-20">
                    <div className="flex flex-col md:flex-row justify-center space-x-10">
                        <div className="w-1/3">
                            <img className="w-full h-auto" src={loadedImage} alt="" />
                        </div>
                        <div className="space-y-4 w-1/2">
                            <img className="w-[200px] h-auto" src={userPicture} alt="" />
                            <h4>Trainer Name: {name}</h4>
                            <p>Category : {category}</p>
                            <p>Rating: {rating}</p>
                            <p className="text-justify">{description}</p>
                            <div>
                                <Link to='/trainer'><button className="btn bg-lime-400 border-transparent text-white">Join Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-[85%] mx-auto mb-20">
                <SomeClasses></SomeClasses>
            </section>
        </div>
    );
};

export default ClassDetails;