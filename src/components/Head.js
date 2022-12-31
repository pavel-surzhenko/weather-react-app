import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { useStore, useWeather } from "../hooks";
import { Loading } from "./Loading";

export const Head = observer(() => {
    const { selectedDayId } = useStore();
    const { data, isFetched } = useWeather();

    const currentDay = data.find((day) => day.id === selectedDayId);

    const dayOfWeek = format(
        new Date(currentDay?.day ? currentDay.day : "00000"),
        "EEEE"
    );
    const dayOfMonth = format(
        new Date(currentDay?.day ? currentDay.day : "00000"),
        "PP"
    );

    return (
        <div className="head">
            <div className="icon cloudy"></div>
            <div className="current-date">
                <p>{isFetched ? dayOfWeek : <Loading />}</p>
                <span>{dayOfMonth}</span>
            </div>
        </div>
    );
});
