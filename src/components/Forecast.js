import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

import { useWeather } from "../hooks/useWeather";
import { Day } from "./Day";
import { Loading } from "./Loading";

export const Forecast = observer(() => {
    const { data, isFetched } = useWeather();
    const { selectedDayId, setSelectedDayId, isFiltered, filteredDays } =
        useStore();

    const DayJSX = isFiltered
        ? filteredDays(data).map((day) => <Day key={day.id} {...day} />)
        : data.map((day) => <Day key={day.id} {...day} />);

    useEffect(() => {
        if (!selectedDayId && isFetched) {
            setSelectedDayId(data[0].id);
        }
    });

    useEffect(() => {
        if (isFiltered) {
            setSelectedDayId(filteredDays(data)[0].id);
        }
    }, [isFiltered]);

    return <div className="forecast">{isFetched ? DayJSX : <Loading />}</div>;
});
