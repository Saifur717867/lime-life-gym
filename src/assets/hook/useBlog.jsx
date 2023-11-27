import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlog = () => {
    const axiosPublic = useAxiosPublic();
    const { data: forums = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forums');
            return res.data;
        }
        
    })
    return [forums, loading, refetch]
};

export default useBlog;