import CoverHead from "../../components/coverimage/CoverHead";
import FavAndTitle from "../../components/helmet/FavAndTitle";
import img from '../../../images/slide-4.jpg';
import useGallery from "../../hook/gallery/useGallery";
import GalleryCard from "./GalleryCard";
import { useInfiniteQuery } from "@tanstack/react-query";


// const getImages = async({ pageParam = 0 }) => {
//    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&offset=${ pageParam }`);
// // const res = await fetch('/gallery.json')
//    const data = await res.json();
//    console.log(data)
//    return {...data, prevOffset: pageParam}
// }


const Gallery = () => {

    const [gallery] = useGallery();
   
//     const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
//         queryKey : ['imageData'],
//         queryFn: getImages,
//         getNextPageParam: (lastPage) => {
//             if(lastPage.prevOffset + 10 > lastPage.length == 0 ){
//                 return false;
//             }
//             return lastPage.prevOffset + 10
//         }
        
//     })
//     console.log(data);

//    const postData = data?.pages.reduce((acc, page) => {
//     console.log(page)
//     return [...acc, ...page]

//    }, [])

//     console.log(postData);


    return (
        <div>
            <FavAndTitle title='Lime Life | Gallery'></FavAndTitle>
            <section className="">
                <CoverHead coverImg={img} title={'Gallery'}></CoverHead>
            </section>
            <section className="w-[85%] mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        gallery.map(image => <GalleryCard key={image.id} image={image}></GalleryCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Gallery;
