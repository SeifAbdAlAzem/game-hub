import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

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
            staleTime: ms('24h'),
            initialData: {count: platforms.length, next: null, results: platforms}
        })
    )
}

export default usePlatforms;