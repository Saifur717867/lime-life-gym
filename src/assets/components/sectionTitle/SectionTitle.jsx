
const SectionTitle = ({subtitle, sectionTitle, className}) => {
    return (
        <div className="text-center space-y-3 py-10 font-Cinzel font-semibold">
            <p className="text-orange-500">--- {subtitle} ---</p>
            <h3 className={`text-2xl uppercase border-y-4 w-1/4 mx-auto py-4 ${className}`}>{sectionTitle}</h3>
        </div>
    );
};

export default SectionTitle;