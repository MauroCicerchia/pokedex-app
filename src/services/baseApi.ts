import _ from "lodash";
import Promise from "bluebird";
import axios, { AxiosInstance, Method } from "axios";

class BaseApi {
    axios: AxiosInstance;

	constructor(baseURL: string) {
		this.axios = axios.create({ baseURL });
	}

	get(path: string, qs: Object, headers: Object = {}) {
		return this._doRequest("GET", path, qs, {}, headers);
	}

	post(path: string, qs: Object, body: Object, headers: Object) {
		return this._doRequest("POST", path, qs, body, headers);
	}

	put(path: string, qs: Object, body: Object, headers: Object) {
		return this._doRequest("PUT", path, qs, body, headers);
	}

	delete(path: string, qs: Object, headers: Object) {
		return this._doRequest("DELETE", path, qs, {}, headers);
	}

	_doRequest(method: Method, path: string, params: Object = {}, data: Object, headers: Object) {
		const config = { method, headers, params, data };
        const $request = this.axios(path, config);
		return Promise.resolve($request).get("data");
	}
}

export default BaseApi;
