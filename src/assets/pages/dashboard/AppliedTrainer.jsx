import React from 'react';
import { FaEye } from 'react-icons/fa';

const AppliedTrainer = () => {
    return (
        <div className="text-center py-20">
            <h2 className="text-4xl">Applied Trainers</h2>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>example@gmail.com</td>
                                <td>Yoga specialist</td>
                                <td><button className="btn bg-blue-700 text-white">
                                    <FaEye></FaEye>
                                </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AppliedTrainer;