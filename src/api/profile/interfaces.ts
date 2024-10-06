/**
 * The profile content of a Renshuu user.
 */
export interface APIProfile {
	id: string;
	real_name: string;
	adventure_level: string;
	user_length: string;
	kao: string;
	studied: {
		today_all: number;
		today_grammar: number;
		today_vocab: number;
		today_kanji: number;
		today_sent: number;
		today_aconj: number;
		today_conj: number;
		total: number;
		total_vocab: number;
		total_kanji: number;
		total_grammar: number;
		total_sent: number;
	};
	level_progress_percs: {
		vocab: {
			n1: number;
			n2: number;
			n3: number;
			n4: number;
			n5: number;
		};
		kanji: {
			n1: number;
			n2: number;
			n3: number;
			n4: number;
			n5: number;
		};
		grammar: {
			n1: number;
			n2: number;
			n3: number;
			n4: number;
			n5: number;
		};
		sent: {
			n1: number;
			n2: number;
			n3: number;
			n4: number;
			n5: number;
		};
	};
	streaks: {
		vocab: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
		kanji: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
		grammar: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
		sent: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
		conj: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
		aconj: {
			correct_in_a_row: string;
			correct_in_a_row_alltime: string;
			days_studied_in_a_row: string;
			days_studied_in_a_row_alltime: string;
		};
	};
	api_usage: {
		calls_today: number;
		daily_allowance: number;
	};
}

/**
 * The amount of studied elements into the Renshuu profile class instance.
 */
export interface ProfileStudied {
	/**
	 * Amount of studied term today.
	 */
	todayAll: number;
	/**
	 * Amount of studied grammar today.
	 */
	todayGrammar: number;
	/**
	 * Amount of studied vocabulary today.
	 */
	todayVocab: number;
	/**
	 * Amount of studied kanji today.
	 */
	todayKanji: number;
	/**
	 * Amount of studied sentences today.
	 */
	todaySentences: number;
	/**
	 * Amount of studied adjective conjugation today.
	 */
	todayAdjectiveConjugation: number;
	/**
	 * Amount of studied verb conjugation today.
	 */
	todayConjugation: number;
	/**
	 * Amount of everything studied since the beginning.
	 */
	total: number;
	/**
	 * Amount of every word studied since the beginning.
	 */
	totalVocab: number;
	/**
	 * Amount of every kanji studied since the beginning.
	 */
	totalKanji: number;
	/**
	 * Amount of every grammar studied since the beginning.
	 */
	totalGrammar: number;
	/**
	 * Amount of every studied sentences since the beginning.
	 */
	totalSentences: number;
}

/**
 * The object representation the five JLPT levels.
 */
export interface JLPTAmount {
	/**
	 * The N1 percentage value.
	 */
	n1: number;
	/**
	 * The N2 percentage value.
	 */
	n2: number;
	/**
	 * The N3 percentage value.
	 */
	n3: number;
	/**
	 * The N4 percentage value.
	 */
	n4: number;
	/**
	 * The N5 percentage value.
	 */
	n5: number;
}

/**
 * The data concerning the streak of an item.
 */
export interface ItemStreakData {
	/**
	 * How many items the user is currently streaking in a row (streak not ended yet).
	 */
	correctInARow: number;
	/**
	 * The best streak score the user made for the item.
	 */
	correctInARowAllTime: number;
	/**
	 * The amount of days the user has been studying this item in a row.
	 */
	daysStudiedInARow: number;
	/**
	 * The amount of days the user has been studying this item in a row, but their best score.
	 */
	daysStudiedInARowAllTime: number;
}

/**
 * One of the possible items (words, grammar, etc.).
 */
export type Item = 'vocab' | 'kanji' | 'grammar' | 'sentences';

/**
 * One of the possible items (words, grammar, etc.), but with the API typo.
 */
export type APIItem = 'vocab' | 'kanji' | 'grammar' | 'sent';

/**
 * One of the possible items (words, grammar, etc.), with the two types of conjugation added.
 */
export type ItemExtended = Item | 'adjectiveConjugation' | 'conjugation';

/**
 * One of the possible items (words, grammar, etc.), with the two types of conjugation added,
 * but with the API typo.
 */
export type APIItemExtended = APIItem | 'aconj' | 'conj';

/**
 * An array with all the items included once.
 */
export const items: Item[] = ['vocab', 'kanji', 'grammar', 'sentences'] as const;

/**
 * An array with all the items included once, including the extended ones.
 */
export const itemsExtended: ItemExtended[] = [
	'vocab',
	'kanji',
	'grammar',
	'sentences',
	'adjectiveConjugation',
	'conjugation',
];
/**
 * An array with all the items included once, but with the API typo.
 */
export const apiItems: APIItem[] = ['vocab', 'kanji', 'grammar', 'sent'] as const;

/**
 * An array with all the items included once, including the extended ones, but with the API typo.
 */
export const apiItemsExtended: APIItemExtended[] = [
	'vocab',
	'kanji',
	'grammar',
	'sent',
	'aconj',
	'conj',
];

/**
 * The level progress for each item, based on the JLPT level.
 */
export type ProfileLevelProgressPercentages = Record<Item, JLPTAmount>;

/**
 * The streak data (days and amount) for each item.
 */
export type ProfileStreaks = Record<ItemExtended, ItemStreakData>;

/**
 * Data about the usage of the Renshuu API and the rate limit.
 */
export interface ProfileAPIUsage {
	/**
	 * Today's amount of call to the API.
	 */
	callsToday: number;
	/**
	 * The daily limit.
	 */
	dailyAllowance: number;
}
