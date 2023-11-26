

const AllTrainer = () => {
    return (
        <div className="text-center py-20">
            <h3 className="text-4xl">All Trainers</h3>
            <div className="w-[85%] mx-auto mt-10 bg-black">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-lime-400 text-black">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Expertise</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Example@gmail.com</p> 
                                </td>
                                <td>Body Builder</td>
                                <td>
                                    <button className="btn bg-blue-700">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTrainer;