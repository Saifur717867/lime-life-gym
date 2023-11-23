

const AddItem = () => {
    return (
        <div className="w-[85%] mx-auto mb-10">
                <h2 className="text-4xl underline font-bold pt-10 text-center">Add Your Items Here</h2>
                <form className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={''} name="email" placeholder="Email" className="input input-bordered" required disabled/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span>Job Categories</span>
                        </label>
                        <select className="select input select-bordered w-full" name="category" required>
                            <option value={''}>Select A Category</option>
                            <option>Web Design and Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" name="minPrice" placeholder="Minimum Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" name="maxPrice" placeholder="Maximum Price" className="input input-bordered" required />
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
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Inter Description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                    </div>
                    <div className="mt-6">
                        <input className="bg-[#51FF04] hover:bg-green-700 transition duration-1000 text-white text-2xl py-3 px-6 rounded-lg w-full cursor-pointer" type="submit" value="Add Item" />
                    </div>
                </form>
            </div>
    );
};

export default AddItem;