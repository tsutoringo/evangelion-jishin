import axios from 'axios';
import * as Endpoints from './Endpoints';

/**
 * API for p2p
 */
class API {
	#client;
	#axios;
	constructor(client) {
		this.#client = client;
		this.#axios = axios.create({
			baseURL: Endpoints.BASE_URL,
			headers: {
				'Content-Type': 'application/json'
			},
			responseType: 'json'
		})
	}
	#missingParameter() {
		throw new Error('missingParameter')
	}
	/**
	 * request
	 * @param {String} path Path to API
	 * @param {Object<*>} params Queries
	 */
	request(path=this.#missingParameter(), params={}) {
		return this.#axios.get(
			path,
			{params}
		)
	}
}

export default API;