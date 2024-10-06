import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { CreateRenshuuConfig } from './interfaces';
import { APIProfile, Profile } from '../api';

/**
 * The main class to init the package.
 */
export class Client {
	/**
	 * The axios instance associated to the client.
	 */
	private readonly instance: AxiosInstance = null;

	/**
	 * The cached data fetched from the API, avoiding useless re-calls.
	 * @private
	 */
	private cache: AxiosResponse<APIProfile>;

	/**
	 * The constructor for the Renshuu.js client.
	 * @param config The config object for the client instance.
	 */
	constructor(public readonly config: CreateRenshuuConfig) {
		this.instance = axios.create({
			baseURL: 'https://api.renshuu.org/v1/',
			headers: {
				Authorization: `Bearer ${config.renshuuApiKey}`,
			},
		});
	}

	/**
	 * The axios instance linked to the package.
	 * @return The axios instance.
	 */
	public get rest(): AxiosInstance {
		return this.instance;
	}

	/**
	 * Get the profile from the API.
	 * @param fetch If the cached data should be refreshed before generating the profile instance.
	 * @return The Renshuu Profile instance.
	 */
	public async getProfile(fetch?: boolean): Promise<Profile> {
		if (fetch || !this.cache) this.cache = await this.instance.get<APIProfile>('/profile');

		return new Profile(this.cache);
	}
}
