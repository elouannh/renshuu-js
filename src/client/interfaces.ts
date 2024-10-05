import { CreateAxiosDefaults } from 'axios';

/**
 * The configuration object for an instance of the Renshuu.js.
 */
export interface CreateRenshuuConfig extends CreateAxiosDefaults {
	/**
	 * The Renshuu API key to use for the requests.
	 */
	renshuuApiKey?: string;
}
