import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from "../../../images/slide-1.jpg";
import CoverHead from "../../components/coverimage/CoverHead";

const Dashboard = () => {
    return (
        <div>
           <section>
           <FavAndTitle title={'Lime Life | Dashboard'}></FavAndTitle>
           <CoverHead title={'Dashboard'} coverImg={img}></CoverHead>
           </section>
        </div>
    );
};

export default Dashboard;