import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from "../../../images/analytics.png";
import CoverHead from "../../components/coverimage/CoverHead";
import BlogCard from "../home/BlogCard";

const Forum = () => {
    return (
        <div>
            <section>
            <FavAndTitle title={'Lime Life | Forum'}></FavAndTitle>
            <CoverHead title={'All Forum'} coverImg={img}></CoverHead>
            </section>
            <section className="bg-white">
                <BlogCard></BlogCard>
            </section>
        </div>
    );
};

export default Forum;