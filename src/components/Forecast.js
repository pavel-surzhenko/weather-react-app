import { useWeather } from "../hooks/useWeather";
import { Day } from "./Day";
import { Loading } from "./Loading";

export const Forecast = () => {
    const { data, isFetched } = useWeather();

    const DayJSX = data.map((day) => <Day key={day.id} {...day} />);

    return <div className="forecast">{isFetched ? DayJSX : <Loading />}</div>;
};
