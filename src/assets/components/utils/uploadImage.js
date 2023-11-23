import axios from "axios";

const image_hosting_key = import.meta.env.VITE_image_imbb;
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const upLoadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image)
    const { data } = await axios.post(image_hosting_Api, formData)
    return data;
}