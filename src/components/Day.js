import { format } from "date-fns";

export const Day = (props) => {
    const dayOfWeek = format(new Date(props.day), "EEEE");

    return (
        <div className={`day ${props.type}`}>
            <p>{dayOfWeek}</p>
            <span>{props.temperature}</span>
        </div>
    );
};
