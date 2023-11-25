import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from "../../../images/Company.png";
import CoverHead from "../../components/coverimage/CoverHead";
import Schedules from "./Schedules";
import ClassCard from "./ClassCard";

const Classes = () => {
    return (
        <div>
            <section>
            <FavAndTitle title={'Lime Life | All Classes'}></FavAndTitle>
            <CoverHead title={'All Classes'} coverImg={img}></CoverHead>
            </section>
            <section>
                <Schedules></Schedules>
            </section>
            <section className="w-[85%] mx-auto py-20">
                <ClassCard></ClassCard>
            </section>
        </div>
    );
};

export default Classes;