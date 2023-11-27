import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
    const axiosPublic = useAxiosPublic();
    const { data: trainers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainers');
            return res.data;
        }
        
    })
    return [trainers, loading, refetch]
};

export default useTrainer;