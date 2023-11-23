import { Helmet } from "react-helmet-async";


const FavAndTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default FavAndTitle;