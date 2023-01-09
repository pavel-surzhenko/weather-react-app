import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";

import { useWeather } from "../hooks/useWeather";
import { Day } from "./Day";
import { Loading } from "./Loading";

export const Forecast = observer(() => {
    const { data, isFetched } = useWeather();
    const { selectedDayId, setSelectedDayId, isFiltered, filteredDays } =
        useStore();

    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        if (isFetched) {
            const weather = isFiltered ? filteredDays(data) : data;
            setWeatherList(weather);
            setSelectedDayId(weather[0]?.id || "");
        }
    }, [isFiltered, isFetched]);

    const DayJSX =
        isFetched &&
        weatherList.slice(0, 7).map((day) => <Day key={day.id} {...day} />);

    return <div className="forecast">{isFetched ? DayJSX : <Loading />}</div>;
});
