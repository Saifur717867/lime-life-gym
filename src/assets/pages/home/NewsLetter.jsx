import img from '../../../images/slide-4.jpg';

const NewsLetter = () => {
    return (
        <div className="w-full dark:bg-gray-500" style={{
            'backgroundImage':
                `url(${img})`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="container bg-black bg-opacity-70 flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl font-semibold text-center dark:text-gray-100">Get Our Updates</h1>
                <p className="pt-2 pb-8 text-xl text-center dark:text-gray-100">Find out about events and other news</p>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-[#51FF04] dark:text-gray-900">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;