import { observer } from "mobx-react-lite";
import { useStore, useWeather } from "../hooks";

export const CurrentWeather = observer(() => {
    const { selectedDayId } = useStore();
    const { data, isFetched } = useWeather();

    const currentDay = data.find((day) => {
        if (day.id === selectedDayId) return day;

        return false;
    });

    // const { temperature, humidity, rain_probability } = currentDay;

    return (
        <div className="current-weather">
            <p className="temperature">{currentDay?.temperature}</p>
            <p className="meta">
                <span className="rainy">%{currentDay?.rain_probability}</span>
                <span className="humidity">%{currentDay?.humidity}</span>
            </p>
        </div>
    );
});
