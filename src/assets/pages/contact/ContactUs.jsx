import img from "../../../../public/images/contact.png";

const ContactUs = () => {
    return (
        <div className="hero min-h-screen w-[85%] mx-auto">
                    <div className="hero-content flex-col-reverse lg:flex-row gap-12">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className='text-center pt-10 -mb-10'>
                                <h3 className='text-2xl font-bold'>Contact Us</h3>
                            </div>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-success" placeholder="Your Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#51FF04] text-white" type="submit" value="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="text-center lg:text-left">
                            <img src={img} alt="sign up photo" />
                        </div>
                    </div>
                </div>
    );
};

export default ContactUs;