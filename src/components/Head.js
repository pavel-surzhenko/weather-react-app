import { observer } from "mobx-react-lite";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useStore, useWeather } from "../hooks";
import { Loading } from "./Loading";

export const Head = observer(() => {
    const { selectedDayId } = useStore();
    const { data, isFetched } = useWeather();
    const [currentDay, setCurrentDay] = useState();

    useEffect(() => {
        if (selectedDayId) {
            const selectedDay =
                isFetched && data.find((day) => day.id === selectedDayId);
            setCurrentDay(selectedDay);
        }
    }, [selectedDayId]);

    return (
        <>
            {selectedDayId ? (
                <div className="head">
                    <div className={`icon ${currentDay?.type}`}></div>
                    <div className="current-date">
                        <p>
                            {currentDay &&
                                format(new Date(currentDay?.day), "eeee")}
                        </p>
                        <span>
                            {currentDay &&
                                format(new Date(currentDay?.day), "dd MMMM")}
                        </span>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
});
