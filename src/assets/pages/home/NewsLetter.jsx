import Swal from 'sweetalert2';
import img from '../../../images/slide-4.jpg';
import useAxiosPublic from '../../hook/useAxiosPublic';
import useSubscribers from '../../hook/useSubscribers';

const NewsLetter = () => {

    const [subscribers] = useSubscribers();
    const axiosPublic = useAxiosPublic()

    const handleNewsletter = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email)
        const existEmail = await subscribers.find(item => item.email == email);
        console.log(existEmail);
        const userInfo = {
            name: name,
            email: email,
            role: 'member'
        }
        if(!existEmail){
            axiosPublic.post('/users', userInfo)
        .then(res => {
            if (res.data.insertedId) {
                // console.log('user added to the database')
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Subscribed Successfully!',
                })
            }
        })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Ops!',
                text: 'Already Subscribed!',
            })
        }
    }


    return (
        <div className="w-full dark:bg-gray-500" style={{
            'backgroundImage':
                `url(${img})`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="container bg-black bg-opacity-70 flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl font-semibold text-center dark:text-gray-100">Get Our Updates</h1>
                <p className="pt-2 pb-8 text-xl text-center dark:text-gray-100">Find out about events and other news</p>
                <form onSubmit={handleNewsletter}>
                    <div className="flex flex-row space-x-4">
                        <input type="text" name='name' placeholder="Your Name" className="w-3/5 p-3 rounded-lg sm:w-2/3" />
                        <input type="email" name='email' placeholder="Your Email" className="w-3/5 p-3 rounded-lg sm:w-2/3" />
                        <button type="submit" className="w-2/5 p-3 font-semibold rounded-lg sm:w-1/3 dark:bg-[#51FF04] dark:text-gray-900">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;