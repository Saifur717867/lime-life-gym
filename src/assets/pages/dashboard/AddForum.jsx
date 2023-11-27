import useAuth from "../../hook/auth/useAuth";
import useTrainer from "../../hook/useTrainer";


const AddForum = () => {
    const [trainers, loading, refetch] = useTrainer();
    console.log(trainers)
    const {name, loadedImage} = trainers;
    const {user} = useAuth();
    const userEmail = user?.email;
    const userName = trainers?.name;
    // const userPhoto = user?.photo;
    // console.log(userEmail)
    // console.log(trainers?.email)
    const existEmail = trainers?.find(trainer => trainer.email == userEmail)
    // const existName = trainers?.find(trainer => trainer.name == userName)
    // const existPhoto = trainers?.find(trainer => trainer.email == userPhoto)
    // console.log(userEmail)
    // console.log(userName)
    // console.log(userPhoto)
    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="text-centers flex justify-center">
            <h2 className="text-4xl underline">Add Forum</h2>
            </div>
            <div>
                <form className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={existEmail?.email} name="email" placeholder="Email" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" value={userName} placeholder="Full Name" className="input input-bordered" required disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="text" name="picture" value={loadedImage} placeholder="Your Photo" className="input input-bordered" required disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Publish Day</span>
                            </label>
                            <input type="date" name="date" placeholder="Available Time In A Week" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blog Thumbnail Picture</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Blog Categories</span>
                            </label>
                            <select className="select input select-bordered w-full" name="category" required>
                                <option value={''}>Select A Category</option>
                                <option>Body Builder</option>
                                <option>Yoga Training</option>
                                <option>Spa Beauty</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Blog Description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-[#51FF04] hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Add Blog" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddForum;