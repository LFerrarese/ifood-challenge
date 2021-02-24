import axios from 'axios';

const baseUri = "http://localhost:3001";

const api = axios.create({
	baseURL: baseUri,
	headers: { "Content-Type": "application/json" }
})

const requests = {
	getFlavors: async () => {
		const response = await api.get('/flavors');

		if (response.status === 200) {
			return response.data;
		}

		return false;
	},

	getHighlightFlavor: async () => {
		const response = await api.get('/highlight-flavor');

		if (response.status === 200) {
			return response.data;
		}

		return false;
	}
}

export default requests;
