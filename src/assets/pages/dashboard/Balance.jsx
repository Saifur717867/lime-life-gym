

const Balance = () => {
    return (
        <div className='text-center py-20 text-white'>
            <h2 className="text-4xl">Balance</h2>
            <div className="w-[85%] mx-auto mt-10">
            <div className='flex'>
                <div className='w-[300px] mx-auto bg-lime-400'>
                    <h4>Remaining Balance</h4>
                    <p>$15236</p>
                 </div>
                <div>Total Payment</div>
            </div>
            </div>
        </div>
    );
};

export default Balance;