import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => {

    const fetchGenres = () =>
        apiClient.get<FetchResponse<Genre>>('/genres')
        .then(res => res.data)

    return (
        useQuery<FetchResponse<Genre>, Error>({
            queryKey: ['genres'],
            queryFn: fetchGenres,
            staleTime: 24 * 60 * 60 * 1000,
            initialData: {count: genres.length, results: genres}
        })
    )
}

export default useGenres;