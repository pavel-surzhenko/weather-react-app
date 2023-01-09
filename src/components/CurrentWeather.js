import { observer } from "mobx-react-lite";
import { useStore, useWeather } from "../hooks";
import { Loading } from "./Loading";

export const CurrentWeather = observer(() => {
    const { selectedDayId } = useStore();
    const { data, isFetched } = useWeather();

    const currentDay = data.find((day) => day.id === selectedDayId);

    const { temperature, humidity, rain_probability } = currentDay || {};

    return (
        <>
            {selectedDayId ? (
                <div className="current-weather">
                    <p className="temperature">
                        {isFetched ? temperature : <Loading />}
                    </p>
                    <p className="meta">
                        <span className="rainy">%{rain_probability}</span>
                        <span className="humidity">%{humidity}</span>
                    </p>
                </div>
            ) : (
                ""
            )}
        </>
    );
});
