import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useSubscribers from "../../hook/useSubscribers";



const Subscriber = () => {

    const [subscribers, loading, refetch] = useSubscribers();
    console.log(subscribers)
    const axiosPublic = useAxiosPublic();

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/users/${user._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    }

    return (
        <div className="text-center py-20">
            <h2 className="text-4xl">All Subscribers</h2>
            <div className="w-[85%] mx-auto mt-10 bg-black">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-lime-400 text-black">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subscribers?.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={() => handleDelete(user)} className="btn bg-red-500 text-white">X</button></td>
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

export default Subscriber;