import axios from 'axios';

const baseUri = "http://localhost:3001";

const api = axios.create({
	baseURL: baseUri,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	}
});

async function getRequest(uri: string) {
	const response = await api.get(uri);

	if (response.status === 200) {
		return response.data;
	}

	return false;
}

interface PizzaData {
	flavor: number;
	size: number;
	doughType: number;
	edge: number;
	highlight: boolean;
	points?: number;
};

const requests = {
	getFlavors: async () => {
		return await getRequest('/flavors');
	},

	getHighlightFlavor: async () => {
		return await getRequest('/highlight-flavor');
	},

	getSizes: async () => {
		return await getRequest('/sizes');
	},

	getDoughTypes: async () => {
		return await getRequest('/dough-types');
	},

	getEdges: async () => {
		return await getRequest('/edges');
	},

	sendPizzaRequest: async (data: PizzaData) => {
		console.log(data);

		const response = await api.post('/pizza/save', JSON.stringify(data));

		if (response.status === 204) {
			return true;
		}

		console.log(response.data);

		return false;
	}
}

export default requests;
