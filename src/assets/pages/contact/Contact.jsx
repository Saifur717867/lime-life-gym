import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from "../../../../public/images/Company.png";
import CoverHead from "../../components/coverimage/CoverHead";
import ContactUs from "./ContactUs";


const Contact = () => {
    return (
        <div>
           <FavAndTitle title={'Lime Lite | Contact us'}></FavAndTitle>
            <div>
                <CoverHead title={'Contact Us'} coverImg={img}></CoverHead>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Contact;