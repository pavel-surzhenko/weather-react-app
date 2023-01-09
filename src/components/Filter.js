import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useStore, useWeather } from "../hooks";

export const Filter = observer(() => {
    const { register, handleSubmit } = useForm();
    const {
        type,
        isFiltered,
        setType,
        setMinTemperature,
        setMaxTemperature,
        applyFilter,
        resetFilter,
        filteredDays,
        isFormBlocked,
    } = useStore();

    const { data } = useWeather();

    const onSubmit = (formData) => {
        setMinTemperature(formData.min);
        setMaxTemperature(formData.max);
        applyFilter(formData);
        filteredDays(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // onReset={resetFilter()}
            className="filter"
        >
            <span
                onClick={() => !isFiltered && setType("cloudy")}
                className={`checkbox ${type === "cloudy" ? "selected" : ""} ${
                    isFiltered ? "blocked" : ""
                }`}
            >
                Cloudy
            </span>
            <span
                className={`checkbox ${type === "sunny" ? "selected" : ""} ${
                    isFiltered ? "blocked" : ""
                }`}
                onClick={() => !isFiltered && setType("sunny")}
            >
                Sunny
            </span>
            <p className="custom-input">
                <label htmlFor="min-temperature">minimum temperature</label>
                <input
                    {...register("minTemperature")}
                    name="minTemperature"
                    id="min-temperature"
                    type="text"
                />
            </p>
            <p className="custom-input">
                <label htmlFor="max-temperature">maximum temperature</label>
                <input
                    {...register("maxTemperature")}
                    name="maxTemperature"
                    id="max-temperature"
                    type="text"
                />
            </p>
            <button
                disabled={isFormBlocked}
                type={isFiltered ? "reset" : "submit"}
            >
                {isFiltered ? "reset" : "filter out"}
            </button>
        </form>
    );
});
