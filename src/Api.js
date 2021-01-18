import axios from "axios";

const MovieApi = axios.create({
    baseURL: "https://yts.mx/api/v2/list_movies.json"})

export const MyApi = {
    PHBoon:()=>MovieApi.get()
}