import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useStore, useWeather } from "../hooks";

export const Filter = observer(() => {
    const store = useStore();
    const { type, isFiltered, minTemperature, maxTemperature, isFormBlocked } =
        store;

    return (
        <div className="filter">
            <span
                onClick={() => !isFiltered && store.setType("cloudy")}
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
                onClick={() => !isFiltered && store.setType("sunny")}
            >
                Sunny
            </span>
            <p className="custom-input">
                <label htmlFor="min-temperature">minimum temperature</label>
                <input
                    value={minTemperature}
                    id="min-temperature"
                    type="number"
                    disabled={isFiltered}
                    onChange={(event) =>
                        store.setMinTemperature(event.target.value)
                    }
                />
            </p>
            <p className="custom-input">
                <label htmlFor="max-temperature">maximum temperature</label>
                <input
                    value={maxTemperature}
                    id="max-temperature"
                    type="number"
                    disabled={isFiltered}
                    onChange={(event) =>
                        store.setMaxTemperature(event.target.value)
                    }
                />
            </p>
            {isFiltered ? (
                <button type="submit" onClick={() => store.resetFilter()}>
                    Reset
                </button>
            ) : (
                <button
                    type="submit"
                    disabled={isFormBlocked}
                    onClick={() =>
                        store.applyFilter({
                            type,
                            minTemperature,
                            maxTemperature,
                        })
                    }
                >
                    Filter out
                </button>
            )}
        </div>
    );
});
