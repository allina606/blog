// import axios and create pre-configured version of axios
import axios from 'axios'

export default axios.create({
    baseURL: 'http://25c3e300.ngrok.io'
})