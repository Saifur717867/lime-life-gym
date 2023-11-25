import img from '../../../images/slide-2.jpg';
import img2 from '../../../images/yoga.jpg';

const Schedules = () => {
    return (
        <div className='text-white'>
            <div style={{
                'backgroundImage':
                    `url(${img})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }} className="">
                <div className="bg-black bg-opacity-70 py-20">
                    <div className='w-[85%] mx-auto flex flex-col md:flex-col lg:flex-row space-x-10'>
                        <div className='w-full lg:w-1/2'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='w-full md:w-5/6 lg:w-1/2'>
                            <h3 className='uppercase text-4xl font-bold mb-6'>Schedules For Lime Life Fitness</h3>
                            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 w-full'>
                                <div className='space-y-2'>
                                    <div className='w-[100px] h-[50px] text-center bg-red-700 rounded-sm uppercase'>Monday</div>
                                    <div className='w-[100px] h-[50px] text-center bg-red-400  rounded-sm'>Gym</div>
                                    <div className='w-[100px] h-[50px] text-center bg-red-400  rounded-sm'>Spa</div>
                                    <div className='w-[100px] h-[50px] text-center bg-red-400 rounded-sm'>Workout</div>
                                    <div className='w-[100px] h-[50px] text-center bg-red-400 rounded-sm'>Yoga</div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-700 rounded-sm uppercase'>Tuesday</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Yoga</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Workout</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Gym</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>spa</div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-700 rounded-sm uppercase'>Wednesday</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Workout</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Spa</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Yoga</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Gym</div>
                                </div>
                                <div className='space-y-2 mt-4 md:mt-0 lg:mt-0'>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-700 rounded-sm uppercase'>Thursday</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Spa</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Yoga</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Workout</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Gym</div>
                                </div>
                                <div className='space-y-2 mt-4 md:mt-0 lg:mt-0'>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-700 rounded-sm uppercase'>Friday</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Gym</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400  rounded-sm'>Spa</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Yoga</div>
                                    <div className='w-[100px] h-[50px] text-center bg-lime-400 rounded-sm'>Workout</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Schedules;