import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => {
    // Extract the id of the selected genre
    const genreId = selectedGenre ? selectedGenre.id : null;

    // Use the id of the selected genre in the request configuration
    return useData<Game>('/games', { params: { genres: genreId } }, [genreId]);
}


export default useGames;