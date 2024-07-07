import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface GamePlatform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<GamePlatform>('/platforms/lists/parents');

const usePlatforms = () => {

    return (
        useQuery({
            queryKey: ['platforms'],
            queryFn: apiClient.getAll,
            staleTime: 24 * 60 * 60 * 1000,
            initialData: {count: platforms.length, next: null, results: platforms}
        })
    )
}

export default usePlatforms;