import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../enteties/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 100, //24h
})
export default usePlatforms