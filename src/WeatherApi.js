import axios from "axios";

const WeatherApi = axios.create({
    baseURL: "api.openweathermap.org/data/2.5/weather?q=Seoul&appid=91aa43cd7af86f5c8e752fbe2c1bc296"
})

export const SeoulWeatherApi={
    SeoulWeather:()=>WeatherApi.get()
};