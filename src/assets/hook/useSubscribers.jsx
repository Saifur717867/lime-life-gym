import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSubscribers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: subscribers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
        
    })
    return [subscribers, loading, refetch]
};

export default useSubscribers;