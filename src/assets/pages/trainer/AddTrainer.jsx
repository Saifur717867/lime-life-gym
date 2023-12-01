import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-1.jpg';
import useAuth from "../../hook/auth/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import useTrainer from "../../hook/useTrainer";
import { upLoadImage } from "../../components/utils/uploadImage";


const AddTrainer = () => {
    const { user } = useAuth();
    // console.log(user);
    const [checkboxValues, setCheckboxValues] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [trainers] = useTrainer();

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const value = event.target.value;
        if (isChecked) {
            setCheckboxValues([...checkboxValues, value]);
        } else {
            setCheckboxValues(checkboxValues.filter((e) => e != value))
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const day = e.target.day.value;
        const week = e.target.week.value;
        const experience = e.target.experience.value;
        const photo = e.target.photo.files[0];
        const image = await upLoadImage(photo);
        // console.log(image.data.display_url);
        const loadedImage = image.data.display_url;
        const description = e.target.description.value;
        console.log({ email, name, day, week, loadedImage, experience, description, checkboxValues })
        const trainerInfo = {
            email, name, day, week, loadedImage, experience, description, role: 'trainer', expert: checkboxValues, status: 'pending'
        }
        axiosPublic.post('/trainers', trainerInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'Applied successfully!',
                    })
                }
            })
            .catch();

    }




    return (
        <div>
            <FavAndTitle title='Lime Life | Be A Trainer'></FavAndTitle>
            <div>
                <CoverHead coverImg={img} title={'Be A Trainer'}></CoverHead>
            </div>
            <div className="w-[85%] mx-auto mb-10">
                <h2 className="text-4xl underline font-bold pt-10 text-center">Be A Trainer</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={user?.email} name="email" placeholder="Email" className="input input-bordered" required disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Time In A Day</span>
                            </label>
                            <input type="number" name="day" placeholder="Available Time In A Day" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Time In A Week</span>
                            </label>
                            <input type="number" name="week" placeholder="Available Time In A Week" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Picture</span>
                            </label>
                            <input type="file" name="photo" className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Experience Year</span>
                            </label>
                            <input type="number" name="experience" placeholder="Your Experience Year" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Skills</span>
                        </label>
                        <div className="flex flex-row space-x-10">
                            <div className="flex">
                                <label className="label">
                                    <input type="checkbox" value="Body Builder Expert"
                                        onChange={handleCheckboxChange} className="checkbox checkbox-accent" />
                                    <p className="ml-2">Body Builder Expert</p>
                                </label>
                            </div>
                            <div className="flex">
                                <label className="label">
                                    <input type="checkbox" value="Yoga Specialist"
                                        onChange={handleCheckboxChange} className="checkbox checkbox-accent" />
                                    <p className="ml-2">Yoga Specialist</p>
                                </label>
                            </div>
                            <div className="flex">
                                <label className="label">
                                    <input type="checkbox" value="Spa Beauty Expert"
                                        onChange={handleCheckboxChange} className="checkbox checkbox-accent" />
                                    <p className="ml-2">Spa Beauty Expert</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About Your Self</span>
                        </label>
                        <textarea name="description" placeholder="About Your Self" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-[#51FF04] hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Apply Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTrainer;