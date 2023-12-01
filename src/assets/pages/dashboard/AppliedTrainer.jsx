import { FaEye } from 'react-icons/fa';
import useTrainer from '../../hook/useTrainer';
import Swal from 'sweetalert2';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const AppliedTrainer = () => {

    const [trainers, loading, refetch] = useTrainer();
    // console.log(trainers)
    const filter = trainers.filter(item => item.status === 'pending');
    console.log(filter)

    const handleConfirm = id => {
        fetch(`https://b8a12-server-side-saifur717867.vercel.app/trainers/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Confirm the Trainer Successfully!',
                })
                refetch();
            }
        })
    }

    const sendEmail = () => {
        const templateParams = {
          to_name: 'Customer Name',
          to_email: `${trainer.email}`,  // customize this
          // add other parameters according to your email template
        };
    
        emailjs.send('service_of5wx74', 'template_eden8mg', templateParams)
          .then((response) => {
            console.log('Email sent:', response);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      };

    const handleReject = id => {
        fetch(`https://b8a12-server-side-saifur717867.vercel.app/trainers/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'reject'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Reject Successfully!',
                })
                refetch();
                sendEmail();
            }
        })
    }

    

    return (
        <div className="text-center py-20">
            <h2 className="text-4xl">Applied Trainers</h2>
            <div className="w-[85%] mx-auto mt-10 bg-black">
                <div className="overflow-x-auto">
                    <table className="table">
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
                            {
                                filter?.map((trainer, index) => <tr key={trainer._id}>
                                    <th>{index + 1}</th>
                                    <td>{trainer.name}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.expert}</td>
                                    <td>
                                        <div className='text-center'>
                                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn bg-blue-600" onClick={() => document.getElementById(`${trainer._id}`).showModal()}><FaEye className='text-white'></FaEye></button>
                                            <dialog id={trainer._id} className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <div>
                                                        <div className='flex justify-center'>
                                                        <img className='w-[250px] h-auto' src={trainer.loadedImage} alt="" />
                                                        </div>
                                                        <div>
                                                        <p>Trainer Name: {trainer.name}</p>
                                                        <p>Trainer Skills: {trainer.expert}</p>
                                                        <p>Experience: {trainer.experience} Years</p>
                                                        <p>Available Time Slot: {trainer.day}</p>
                                                        <p>About: {trainer.description.slice(0, 100)}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="modal-action">
                                                    <div className='text-white'>
                                                        
                                                    </div>
                                                        <form method="dialog">
                                                        <button onClick={() => handleConfirm(trainer._id)} className='btn btn-success mr-2 text-white'>Confirm</button>
                                                        <button onClick={() => handleReject(trainer._id)} className='btn btn-error text-white'>Reject</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>
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

export default AppliedTrainer;