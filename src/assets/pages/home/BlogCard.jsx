import { Link } from "react-router-dom";
import useBlog from "../../hook/useBlog";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";


const BlogCard = () => {
    const [forums, loading, refetch] = useBlog();
    // console.log(forums)
    return (
        <div className="w-[85%] mx-auto py-20">
            <h3 className="text-5xl text-black text-center underline">Our Forums</h3>
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                {
                    forums?.map((items, key) => (
                        <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                            <div>
                                <img src={items.loadedImage} loading="lazy" alt='' className="w-full h-[250px] rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <div className="flex justify-between">
                                        <div>
                                            <button>
                                                <FaThumbsUp className="text-2xl mr-3 text-green-500"></FaThumbsUp>
                                            </button>
                                            <button>
                                                <FaThumbsDown className="text-2xl text-red-500"></FaThumbsDown>
                                            </button>
                                        </div>
                                        <div>
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <img className="w-[60px] h-[60px] rounded-full" src={items.userPicture} alt="" />
                                        </div>
                                        <div>
                                            <p>{items.name}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.description.slice(0, 140)}</p>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <Link to={`/forums/${items._id}`}><button className="btn bg-[#51FF04] border-transparent w-full text-white">Read More</button></Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default BlogCard;