import useClasses from '../../hook/useClasses';
import AllClasses from '../classes/AllClasses';

const SomeClasses = () => {
    const [classes, loading, refetch] = useClasses();
    console.log(classes)

    return (
        <div>
            <h4 className='text-4xl font-bold mb-10 text-center'>Feature Classes</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes?.slice(0, 3).map(item => <AllClasses key={item._id} item={item}></AllClasses>)
                }
            </div>
        </div>
    );
};

export default SomeClasses;