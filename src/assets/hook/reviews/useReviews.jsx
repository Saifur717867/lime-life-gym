import { useEffect, useState } from "react";


const useReviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    // console.log(reviews)
    return [reviews]
};

export default useReviews;