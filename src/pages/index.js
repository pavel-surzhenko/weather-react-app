import { Filter, Forecast, CurrentWeather, Head } from "../components";

export const MainPage = () => {
    return (
        <main>
            <Filter />
            <Head />
            <CurrentWeather />
            <Forecast />
        </main>
    );
};
