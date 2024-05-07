import { GameQuery } from "../components/GameStore/GameStore";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface GameGenre {
    id: number;
    name: string;
}

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    genre: GameGenre[];
}

const useGames = (gameQuery: GameQuery) => {
    // Extract the id of the selected genre and platform
    const genreId = gameQuery.genre ? gameQuery.genre.id : null;
    const platformId = gameQuery.platform ? gameQuery.platform.id : null;

    // Use the id of the selected genre in the request configuration
    return useData<Game>('/games', { params: { genres: genreId, platforms: platformId, ordering: gameQuery.sortOrder } }, [gameQuery]);
}


export default useGames;