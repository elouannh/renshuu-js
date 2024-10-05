import { AxiosResponse } from 'axios';
import {
	APIProfile,
	ProfileAPIUsage,
	ProfileLevelProgressPercentages,
	ProfileStreaks,
	ProfileStudied,
} from './interfaces';

/**
 * The profile instance, including cool and useful methods.
 */
export class Profile {
	/**
	 * The Renshuu user ID.
	 */
	public readonly id: string;

	/**
	 * The name of the Renshuu account.
	 */
	public readonly realName: string;

	/**
	 * The total adventure level.
	 */
	public readonly adventureLevel: string;

	/**
	 * How much time the user has been registered on Renshuu.
	 */
	public readonly userLength: string;

	/**
	 * The image of the current user's Kao.
	 */
	public readonly kao: string;

	/**
	 * The amount of studied elements into the Renshuu profile class instance.
	 */
	public readonly studied: ProfileStudied;

	/**
	 * The level progress for each item, based on the JLPT level.
	 */
	public readonly levelProgressPercentages: ProfileLevelProgressPercentages;

	/**
	 * The streak data (days and amount) for each item.
	 */
	public readonly streaks: ProfileStreaks;

	/**
	 * Data about the usage of the Renshuu API and the rate limit.
	 */
	public readonly apiUsage: ProfileAPIUsage;

	/**
	 * The base constructor for the renshuu profile class.
	 * @param data The received axios data.
	 */
	constructor(public readonly data: AxiosResponse<APIProfile>) {}
}
