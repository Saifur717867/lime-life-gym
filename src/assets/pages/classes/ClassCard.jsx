import useClasses from '../../hook/useClasses';
import AllClasses from './AllClasses';

const classCard = () => {

    const [classes, loading, refetch] = useClasses();
    console.log(classes)

    return (
        <div>
            <h4 className='text-4xl font-bold mb-10 text-center'>All Classes Here</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes?.map(item => <AllClasses key={item._id} item={item}></AllClasses>)
                }
            </div>
        </div>
    );
};

export default classCard;