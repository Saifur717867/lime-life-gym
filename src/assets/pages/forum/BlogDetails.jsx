import { Link, useLoaderData } from "react-router-dom";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import CoverHead from "../../components/coverimage/CoverHead";
import img from "../../../images/analytics.png";
import SomeBlogs from "../home/SomeBlog";


const BlogDetails = () => {
    const details = useLoaderData();
    console.log(details)
    const {name, loadedImage, userPicture, description, category, date } = details;
    return (
        <div>
            <section>
                <FavAndTitle title={'Lime Life | Trainer Details'}></FavAndTitle>
                <CoverHead coverImg={img} title={'Details'}></CoverHead>
            </section>
            <div className="w-[85%] mx-auto py-20">
                    <div className="flex flex-col md:flex-row justify-center space-x-10">
                        <div className="w-1/3">
                            <img className="w-full h-auto" src={loadedImage} alt="" />
                        </div>
                        <div className="space-y-4 w-1/2">
                            <img className="w-[100px] h-[100px] rounded-full" src={userPicture} alt="" />
                            <h4>Writer Name: {name}</h4>
                            <p>Category : {category}</p>
                            <p>Posted date : {date}</p>
                            <p className="text-justify">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="w-[85%] mx-auto bg-white">
                    <SomeBlogs></SomeBlogs>
                </div>
        </div>
    );
};

export default BlogDetails;