import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-2.jpg';
import Team from "../home/Team";
import CallToAction from "./CallToAction";


const Trainer = () => {
    return (
        <div>
            <FavAndTitle title='Lime Life | Trainer'></FavAndTitle>
            <section>
                <CoverHead coverImg={img}  title={'Our Trainer'}></CoverHead>
            </section>
            <section>
                <Team></Team>
            </section>
            <section>
                <CallToAction></CallToAction>
            </section>
        </div>
    );
};

export default Trainer;