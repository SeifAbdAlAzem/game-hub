import useData from "./useData";

export interface GamePlatform {
    id: number;
    name: string;
}

const usePlatform = () => useData<GamePlatform>('/platforms/lists/parents');

export default usePlatform;