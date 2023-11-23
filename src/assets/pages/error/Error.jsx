import { Link } from 'react-router-dom';
import img from '../../../../public/images/error.png';
import FavAndTitle from '../../components/helmet/FavAndTitle';

const Error = () => {
    return (
        <div>
            <FavAndTitle title={'Bistro Boss | Error '}></FavAndTitle>
            <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="" />
            <Link to='/'><button className="btn btn-outline border-0 border-b-4">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;