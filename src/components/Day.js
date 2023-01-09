import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

export const Day = observer((props) => {
    const { selectedDayId, setSelectedDayId } = useStore();

    const handleClick = () => {
        setSelectedDayId(props.id);
    };

    return (
        <div
            onClick={handleClick}
            className={`day ${props.type} ${
                props.id === selectedDayId ? "selected" : ""
            }`}
        >
            <p>{format(new Date(props.day), "EEEE")}</p>
            <span>{props.temperature}</span>
        </div>
    );
});
