import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { GamePlatform } from "./usePlatform";
import APIClient, { FetchResponse } from "../services/api-client";

interface GameGenre {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: GamePlatform}[];
    metacritic: number;
    genre: GameGenre[];
    rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
    // Extract the id of the selected genre and platform
    const genreId = gameQuery.genre ? gameQuery.genre.id : null;
    const platformId = gameQuery.platform ? gameQuery.platform.id : null;
    const fetchGames = () =>
        apiClient
            .getAll({
                params: {
                    genres: genreId,
                    parent_platforms: platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText
                },
            });

    // Use the id of the selected genre in the request configuration
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: fetchGames,
    });
}


export default useGames;