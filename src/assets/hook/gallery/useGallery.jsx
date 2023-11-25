import { useEffect, useState } from "react";

const useGallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('/gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    }, [])
    return [gallery]
};

export default useGallery;