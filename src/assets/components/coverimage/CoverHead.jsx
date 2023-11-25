

const CoverHead = ({title, coverImg}) => {
    return (
        <div style={{backgroundImage: `url(${coverImg})`}} className="font-Cinzel relative bg-cover bg-no-repeat bg-center w-full">
            <div className="bg-black bg-opacity-70 pt-20">
                <div className="flex flex-col justify-center items-center text-center py-20">
                    <h1 className="text-white text-5xl font-bold">{title}</h1>
                    <p className="text-white text-sm pt-4">Awoken to a healthier, happy life</p>
                </div>
            </div>
        </div>
    );
};

export default CoverHead;