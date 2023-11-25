import img from '../../../images/slide-2.jpg';
import img2 from '../../../images/yoga.jpg';

const AboutUs = () => {
    return (
        <div className='text-white'>
            <div style={{
            'backgroundImage':
                `url(${img})`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="">
            <div className="bg-black bg-opacity-70 py-20">
                <div className='w-[85%] mx-auto flex flex-col-reverse md:flex-row gap-20'>
                <div className='w-full lg:w-2/3'>
                <h3 className='uppercase text-4xl font-bold mb-6'>About Lime Life Fitness</h3>
                <p className='text-justify'>No matter what you’re looking for in a gym, we’ve got a membership option made for you. All Planet Fitness members enjoy unlimited access to their home club and the support of our friendly, knowledgeable staff anytime you need it. PF Black Card® members receive additional benefits, including the ability to bring a guest for free and access to any of our 2,400+ PF locations.

                    Looking for a little extra guidance or inspiration to help you meet your fitness goals? As a PF member, you can take advantage of our free fitness training* or find your motivation by reading real member experiences on Planet of Triumphs.

                    It’s our goal to provide a clean, safe, welcoming environment for anyone who walks through our door, and all the equipment, amenities and support you need once you’re here.</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default AboutUs;