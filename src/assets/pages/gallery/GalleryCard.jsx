

const GalleryCard = ({ image }) => {
    return (
        <div className="shadow-lime-300 shadow-lg rounded-lg">
            <img className="border-lime-400 border-4 w-full rounded-lg" src={image.url} alt="" />
        </div>
    );
};

export default GalleryCard;