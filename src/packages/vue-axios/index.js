import axios from 'axios'

const HTTPClient = axios.create({
	baseURL: 'https://myfirstpersonalvuejs.firebaseio.com'
})
export default HTTPClient
