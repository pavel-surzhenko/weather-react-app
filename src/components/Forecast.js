import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

import { useWeather } from "../hooks/useWeather";
import { Day } from "./Day";
import { Loading } from "./Loading";

export const Forecast = observer(() => {
    const { data, isFetched } = useWeather();
    const { selectedDayId, setSelectedDayId } = useStore();

    const DayJSX = data.map((day) => <Day key={day.id} {...day} />);

    useEffect(() => {
        if (!selectedDayId && isFetched) {
            setSelectedDayId(data[0].id);
        }
    });

    return <div className="forecast">{isFetched ? DayJSX : <Loading />}</div>;
});
