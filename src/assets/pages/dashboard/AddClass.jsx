import Swal from "sweetalert2";
import useAuth from "../../hook/auth/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { upLoadImage } from "../../components/utils/uploadImage";
import useTrainer from "../../hook/useTrainer";

const AddClass = () => {
    const [trainers, loading, refetch] = useTrainer();
    // console.log(trainers)

    const { user } = useAuth();
    const userEmail = user?.email;
    // console.log(user)

    const trainer = trainers?.find(item => item.email == userEmail)
    console.log(trainer)
    const useName = trainer?.name;
    const usePhoto = trainer?.loadedImage;

    const axiosPublic = useAxiosPublic();

    const handleAddClass = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const userPicture = e.target.picture.value;
        const date = e.target.date.value;
        const category = e.target.category.value;
        const rating = e.target.rating.value;
        const title = e.target.title.value;
        const photo = e.target.photo.files[0];
        const image = await upLoadImage(photo);
        console.log(image.data.display_url);
        const loadedImage = image.data.display_url;
        const description = e.target.description.value;
        console.log({ email, name, userPicture, loadedImage, category, date, rating, title, description })
        const ClassInfo = {
            email, name, userPicture, loadedImage, category, date, rating, title, description
        }
        axiosPublic.post('/classes', ClassInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Add Blog successfully!',
                    })
                }
            })
            .catch();
    }
    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="text-centers flex justify-center">
                <h2 className="text-4xl underline">Add Class</h2>
            </div>
            <div>
                <form onSubmit={handleAddClass} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={userEmail} name="email" placeholder="Email" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" value={useName} placeholder="Full Name" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="text" name="picture" value={usePhoto} placeholder="Your Photo" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Publish Day</span>
                            </label>
                            <input type="date" name="date" placeholder="Available Time In A Week" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Thumbnail Picture</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Class Categories</span>
                            </label>
                            <select className="select input select-bordered w-full" name="category" required>
                                <option value={''}>Select A Category</option>
                                <option>Body Builder</option>
                                <option>Yoga Training</option>
                                <option>Spa Beauty</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title Here" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Class Description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-[#51FF04] hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;