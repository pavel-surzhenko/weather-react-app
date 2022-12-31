import { useQuery } from "react-query";

import { api } from "../api";

export const useWeather = () => {
    const query = useQuery("weather", api.getWeather);
    const { data, isFetched, isSuccess } = query;

    return {
        data: data || [{}],
        isFetched,
        isSuccess,
    };
};
