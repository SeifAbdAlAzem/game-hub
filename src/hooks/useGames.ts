import useData from "./useData";
import { Genre } from "./useGenres";
import { GamePlatform } from "./usePlatform";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: GamePlatform | null) => {
    // Extract the id of the selected genre and platform
    const genreId = selectedGenre ? selectedGenre.id : null;
    const platformId = selectedPlatform ? selectedPlatform.id : null;

    // Use the id of the selected genre in the request configuration
    return useData<Game>('/games', { params: { genres: genreId, platforms: platformId } }, [genreId, platformId]);
}


export default useGames;