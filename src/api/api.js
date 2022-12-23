// Core
import axios from 'axios';

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const api = Object.freeze({
    async getWeather() {
        const { data } =  await axios.get(`${WEATHER_API_URL}`);

        return data.data;
    },
});
