import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-1.jpg';
import Detail from "./Detail";


const TrainerDetail = () => {
    return (
        <div>
            <section>
                <FavAndTitle title={'Lime Life | Trainer Details'}></FavAndTitle>
                <CoverHead coverImg={img} title={'Details'}></CoverHead>
            </section>
            <section className="bg-white">
                <Detail></Detail>
            </section>
        </div>
    );
};

export default TrainerDetail;