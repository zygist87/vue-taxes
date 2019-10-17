import axios from 'axios'

export default axios.create({
	baseURL: 'https://myfirstpersonalvuejs.firebaseio.com/posts.json'
})
