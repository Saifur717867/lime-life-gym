import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-2.jpg';
import CoverHead from "../../components/coverimage/CoverHead";
import BookedPrice from "./BookedPrice";

const Booked = () => {
    return (
        <div>
            <section>
                <FavAndTitle title={'Lime Life | Trainer Book'}></FavAndTitle>
                <CoverHead coverImg={img} title={'You Can Book here'}></CoverHead>
            </section>
            <section>
                <BookedPrice></BookedPrice>
            </section>
        </div>
    );
};

export default Booked;