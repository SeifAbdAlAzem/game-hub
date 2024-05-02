import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '278e18fbdf9c4230b70103a5b47ef0a1',
    }
})