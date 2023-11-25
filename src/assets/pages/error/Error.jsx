import { Link } from 'react-router-dom';
import img from '../../../images/error.png';
import FavAndTitle from '../../components/helmet/FavAndTitle';

const Error = () => {
    return (
        <div className='w-1/3 mx-auto py-20 h-auto'>
            <FavAndTitle title={'Lime Life | Error '}></FavAndTitle>
            <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="" />
            <Link to='/'><button className="btn btn-outline border-0 border-b-4 mt-5">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;