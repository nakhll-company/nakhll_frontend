import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/json"


// axios.interceptors.response.use(null, )

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}