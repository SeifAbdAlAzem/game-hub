import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {

    return (
        useQuery<FetchResponse<Genre>, Error>({
            queryKey: ['genres'],
            queryFn: apiClient.getAll,
            staleTime: ms('24h'),
            initialData: {count: genres.length, next: null , results: genres}
        })
    )
}

export default useGenres;