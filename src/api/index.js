import axios from "axios";

const API_KEY = 'ea06f72446bb75eaf4ff821569b02c16'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}