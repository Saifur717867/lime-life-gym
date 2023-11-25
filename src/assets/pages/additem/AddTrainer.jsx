import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-1.jpg';


const AddTrainer = () => {
    return (
        <div>
            <FavAndTitle title='Lime Life | Be A Trainer'></FavAndTitle>
            <div>
                <CoverHead coverImg={img} title={'Be A Trainer'}></CoverHead>
            </div>
            <div className="w-[85%] mx-auto mb-10">
                <h2 className="text-4xl underline font-bold pt-10 text-center">Be A Trainer</h2>
                <form className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={''} name="email" placeholder="Email" className="input input-bordered" required disabled />
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
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name="photo" placeholder="Inter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Skills</span>
                        </label>
                        <div className="flex flex-row space-x-10">
                            <div className="flex">
                                <input type="checkbox" checked="" className="checkbox checkbox-accent" />
                                <p className="ml-2">Body Builder Expert</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" checked="" className="checkbox checkbox-accent" />
                                <p className="ml-2">Yoga Specialist</p>
                            </div>
                            <div className="flex">
                                <input type="checkbox" checked="" className="checkbox checkbox-accent" />
                                <p className="ml-2">Beauty Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About Your Self</span>
                        </label>
                        <textarea name="description" placeholder="About Your Self" className="textarea textarea-bordered textarea-lg w-full"></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-[#51FF04] hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Applied" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTrainer;