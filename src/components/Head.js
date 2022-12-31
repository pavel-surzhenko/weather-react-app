import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { useStore, useWeather } from "../hooks";

export const Head = observer(() => {
    const { selectedDayId } = useStore();
    const { data, isFetched } = useWeather();

    const currentDay = data?.find((day) => {
        if (day.id === selectedDayId) return day;

        return false;
    });

    const dayOfWeek = format(new Date(currentDay?.day), "EEEE");
    const dayOfMonth = format(new Date(currentDay?.day), "PP");

    return (
        <div className="head">
            <div className="icon cloudy"></div>
            <div className="current-date">
                <p>{dayOfWeek}</p>
                <span>{dayOfMonth}</span>
            </div>
        </div>
    );
});
