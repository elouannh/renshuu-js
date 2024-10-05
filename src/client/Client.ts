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
	 * @return The Renshuu Profile instance.
	 */
	public async getProfile(): Promise<Profile> {
		const profile: AxiosResponse<APIProfile> = await this.instance.get<APIProfile>('/profile');

		return new Profile(profile);
	}
}
