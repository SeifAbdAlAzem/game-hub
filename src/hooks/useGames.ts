import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameStore from "../store";
import { Game } from "../entities/Game";

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