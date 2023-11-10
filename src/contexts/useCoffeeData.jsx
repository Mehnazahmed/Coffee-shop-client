import { useQuery } from "@tanstack/react-query";



const useCoffeeData = () => {
    const {data: coffee = [],  loading, refetch} = useQuery({
        queryKey: ['coffee'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/coffee');
            return res.json();
        }
    })

    return [coffee,refetch]
};

export default useCoffeeData;