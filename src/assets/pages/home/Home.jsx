
import Slider from "../../components/carousel/Slider";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Feature from "./Feature";
import AboutUs from "./AboutUs";
import NewsLetter from "./NewsLetter";
import BlogCard from "./BlogCard";
import SomeClasses from "./SomeClasses";
import SomeBlogs from "./SomeBlog";


const Home = () => {
    return (
        <div>
            <FavAndTitle title='Lime Life | Home'></FavAndTitle>
            <div>
                <Slider></Slider>
            </div>
            <section className="bg-white">
                <Feature></Feature>
            </section>
            <section>
                <AboutUs></AboutUs>
            </section>
            <section className="w-[85%] mx-auto py-20">
                <SomeClasses></SomeClasses>
            </section>
            <section>
                <NewsLetter></NewsLetter>
            </section>
            <div>
                <SectionTitle subtitle={'---Whats our clients say---'} sectionTitle={'Testimonials'}></SectionTitle>
                <Testimonial></Testimonial>
            </div>
            <section className="bg-white">
                <SomeBlogs></SomeBlogs>
            </section>
            <div>
            <Team></Team>
            </div>
        </div>
    );
};

export default Home;