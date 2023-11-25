import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-4.jpg';
import CoverHead from "../../components/coverimage/CoverHead";

const Payment = () => {
    return (
        <div>
            <section>
            <FavAndTitle title={'Lime Life | Payment'}></FavAndTitle>
                <CoverHead coverImg={img} title={'Payment Here'}></CoverHead>
            </section>
        </div>
    );
};

export default Payment;