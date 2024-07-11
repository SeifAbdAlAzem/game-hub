import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ScreenShots from "../entities/ScreenShots";

const useScreenShots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);

    return (
    useQuery({
        queryKey: ['scrrenshots', gameId],
        queryFn: apiClient.getAll
    })
)
}

export default useScreenShots;