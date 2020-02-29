import axios from 'axios'

export default axios.create({
    baseURL: "https://reactquiz-ae327.firebaseio.com/"
})
