import useTrainer from "../../hook/useTrainer";


const AllTrainer = () => {

    const [trainers, loading, refetch] = useTrainer();
    console.log(trainers)


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
                            {
                                trainers?.map((trainer, index) => <tr key={trainer._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={trainer.loadedImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{trainer.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{trainer.email}</p> 
                                </td>
                                <td>{trainer.expert}</td>
                                <td>
                                    <button className="btn bg-blue-700">Pay</button>
                                </td>
                            </tr>
    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTrainer;