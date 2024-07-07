import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface GamePlatform {
    id: number;
    name: string;
}

const usePlatform = () => {

    const fetchPlatforms = () =>
        apiClient.get<FetchResponse<GamePlatform>>('/platforms/lists/parents').then(res => res.data)

    return (
        useQuery({
            queryKey: ['platforms'],
            queryFn: fetchPlatforms,
            staleTime: 24 * 60 * 60 * 1000,
            initialData: {count: platforms.length, results: platforms}
        })
    )
}

export default usePlatform;