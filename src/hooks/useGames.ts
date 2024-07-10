import { useInfiniteQuery } from "@tanstack/react-query";
import { GamePlatform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameStore from "../store";

interface GameGenre {
    id: number;
    name: string;
}

export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: {platform: GamePlatform}[];
    metacritic: number;
    genre: GameGenre[];
    rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
    const gameQuery = useGameStore((s) => s.gameQuery)
    // Extract the id of the selected genre and platform
    const genreId = gameQuery.genreId ? gameQuery.genreId : null;
    const platformId = gameQuery.platformId ? gameQuery.platformId : null;
    const fetchGames = ({pageParam = 1}) =>
        apiClient
            .getAll({
                params: {
                    genres: genreId,
                    parent_platforms: platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            });

    // Use the id of the selected genre in the request configuration
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: fetchGames,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h')
    });
}


export default useGames;