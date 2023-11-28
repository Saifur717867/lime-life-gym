import useTrainer from "../../hook/useTrainer";
import TrainerCard from "../trainer/TrainerCard";


const Team = () => {
    const [trainers, loading, refetch] = useTrainer();
    const filter = trainers.filter(item => item.status === 'confirm');
    console.log(filter)
    return (
        <section className="py-6 dark:bg-gray-700 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracki text-center uppercase">Our Expertise</p>
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our talented Trainer Here for You</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mt-8">
                    {
                        filter?.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;