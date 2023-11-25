import imgIcon1 from '../../../images/icon/Asset-1.png';
import imgIcon2 from '../../../images/icon/Asset-2.png';
import imgIcon3 from '../../../images/icon/Asset-7.png';
import imgIcon4 from '../../../images/icon/Asset-8.png';
import imgIcon5 from '../../../images/icon/Asset-9.png';
import imgIcon6 from '../../../images/icon/Asset-10.png';

const Feature = () => {

    return (
        <div className="w-[85%] mx-auto py-20 text-center">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20'>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon1} alt="" />
                        </div>
                        <h4 className='text-black font-semibold'>USE OF ANY PLANET FITNESS WORLDWIDE</h4>
                        <p>As a PF Black Card® member, Looking for a little extra guidance or inspiration to help you meet your fitness goals?</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon2} alt="" />
                        </div>
                        <h4 className='text-black font-semibold'>USE OF TOTAL BODY ENHANCEMENT</h4>
                        <p>This all-natural red and infrared light therapy treatment is a benefit for PF Black Card® members.</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon3} alt="" />
                        </div>
                        <h4 className='text-black font-semibold'>USE OF MASSAGE CHAIRS</h4>
                        <p>With a PF Black Card® membership, you can relax and unwind after your workout (or before – we don’t judge).</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon4} alt="" />
                        </div>
                        <h4 className='text-black font-semibold uppercase'>Vault Health & Fitness Maumee</h4>
                        <p>Vault Health & Fitness Maumee is a boutique studio that offers membership services for barre, pilates, personal training, semi-private personal training, and yoga.</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon5} alt="" />
                        </div>
                        <h4 className='text-black font-semibold'>FREE IN-CLUB FITNESS TRAINING</h4>
                        <p>Take a small group fitness class, check out our 30-minute express circuit or create a customized workout plan. It’s all free!</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
                <div className='border-lime-400 border-4 rounded-xl relative h-[280px]'>
                    <div className='p-6 space-y-6'>
                        <div className='absolute -top-10 left-40 bg-white'>
                            <img src={imgIcon6} alt="" />
                        </div>
                        <h4 className='text-black font-semibold'>USE OF TOTAL BODY ENHANCEMENT</h4>
                        <p>This all-natural red and infrared light therapy treatment is a benefit for PF Black Card® members.</p>
                    </div>
                    <div className='bg-lime-400 py-4 absolute bottom-0 w-full'>
                        <p className='text-black'>Exclusive PF Black Card® Perk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;