import { GameGenre } from "../hooks/useGames";
import { GamePlatform } from "./GamePlatform";
import { Publisher } from "./Publisher";


export interface Game {
    id: number;
    name: string;
    slug: string;
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: GamePlatform; }[];
    metacritic: number;
    genre: GameGenre[];
    rating_top: number;
}
