import { AxiosResponse } from 'axios';
import {
	apiItems,
	apiItemsExtended,
	APIProfile,
	items,
	itemsExtended,
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
	 * The API data fetched from the API.
	 */
	public readonly data: APIProfile;

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
	public readonly adventureLevel: number;

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
	constructor(data: AxiosResponse<APIProfile>) {
		this.data = data.data;

		this.id = this.data.id;
		this.realName = this.data.real_name;
		this.adventureLevel = Number(this.data.adventure_level);
		this.userLength = this.data.user_length;
		this.kao = this.data.kao;
		this.studied = this.generateStudied();
		this.levelProgressPercentages = this.generateLevelProgressPercentages();
		this.streaks = this.generateStreaks();
		this.apiUsage = this.generateApiUsage();
	}

	/**
	 * Generate the profile studied data.
	 * @private
	 * @return The studied object data.
	 */
	private generateStudied(): ProfileStudied {
		const studied = this.data.studied;

		return {
			todayAll: studied.today_all,
			todayGrammar: studied.today_grammar,
			todayVocab: studied.today_vocab,
			todayKanji: studied.today_kanji,
			todaySentences: studied.today_sent,
			todayAdjectiveConjugation: studied.today_aconj,
			todayConjugation: studied.today_conj,
			total: studied.total ?? 0,
			totalVocab: studied.total_vocab ?? 0,
			totalKanji: studied.total_kanji ?? 0,
			totalGrammar: studied.total_grammar ?? 0,
			totalSentences: studied.total_sent ?? 0,
		};
	}

	/**
	 * Generate the profile level progress percentages data.
	 * @private
	 * @return The level progress percentages data.
	 */
	private generateLevelProgressPercentages(): ProfileLevelProgressPercentages {
		const levelProgressPercentages = this.data.level_progress_percs;
		const object: Partial<ProfileLevelProgressPercentages> = {};

		for (let i = 0; i < apiItems.length; i++) {
			object[items[i]] = {
				n1: levelProgressPercentages[apiItems[i]].n1,
				n2: levelProgressPercentages[apiItems[i]].n2,
				n3: levelProgressPercentages[apiItems[i]].n3,
				n4: levelProgressPercentages[apiItems[i]].n4,
				n5: levelProgressPercentages[apiItems[i]].n5,
			};
		}

		return object as ProfileLevelProgressPercentages;
	}

	/**
	 * Generate the profile streaks data.
	 * @private
	 * @return The streaks data.
	 */
	private generateStreaks(): ProfileStreaks {
		const streaks: APIProfile['streaks'] = this.data.streaks;
		const object: Partial<ProfileStreaks> = {};

		for (let i = 0; i < apiItemsExtended.length; i++) {
			object[itemsExtended[i]] = {
				correctInARow: Number(streaks[apiItemsExtended[i]].correct_in_a_row),
				correctInARowAllTime: Number(streaks[apiItemsExtended[i]].correct_in_a_row_alltime),
				daysStudiedInARow: Number(streaks[apiItemsExtended[i]].days_studied_in_a_row),
				daysStudiedInARowAllTime: Number(
					streaks[apiItemsExtended[i]].days_studied_in_a_row_alltime,
				),
			};
		}

		return object as ProfileStreaks;
	}

	/**
	 * Generate the profile api usage data.
	 * @private
	 * @return The api usage data.
	 */
	private generateApiUsage(): ProfileAPIUsage {
		const apiUsage = this.data.api_usage;

		return {
			callsToday: apiUsage.calls_today,
			dailyAllowance: apiUsage.daily_allowance,
		};
	}
}
