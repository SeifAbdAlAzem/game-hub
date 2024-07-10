import { GameGenre } from "../hooks/useGames";
import { GamePlatform } from "./GamePlatform";


export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: GamePlatform; }[];
    metacritic: number;
    genre: GameGenre[];
    rating_top: number;
}
