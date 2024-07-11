import Genre from './Genre';
import GamePlatform  from "./GamePlatform";
import Publisher from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    slug: string;
    publishers: Publisher[];
    genres: Genre[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: GamePlatform; }[];
    metacritic: number;
    rating_top: number;
}
