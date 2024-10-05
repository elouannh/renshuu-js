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
	correctInARow: string;
	/**
	 * The best streak score the user made for the item.
	 */
	correctInARowAllTime: string;
	/**
	 * The amount of days the user has been studying this item in a row.
	 */
	daysStudiedInARow: string;
	/**
	 * The amount of days the user has been studying this item in a row, but their best score.
	 */
	daysStudiedInARowAllTime: string;
}

export interface ProfileItemCategories<T extends JLPTAmount | ItemStreakData> {
	/**
	 * The vocabulary: words.
	 */
	vocab: T;
	/**
	 * The kanji (Chinese characters).
	 */
	kanji: T;
	/**
	 * The grammar.
	 */
	grammar: T;
	/**
	 * The sentences.
	 */
	sentences: T;
}

/**
 * The level progress for each item, based on the JLPT level.
 */
export type ProfileLevelProgressPercentages = ProfileItemCategories<JLPTAmount>;

/**
 * The streak data (days and amount) for each item.
 */
export type ProfileStreaks = ProfileItemCategories<ItemStreakData> & {
	/**
	 * The verb conjugation streak data.
	 */
	conjugation: ItemStreakData;
	/**
	 * The adjective conjugation streak data.
	 */
	adjectiveConjugation: ItemStreakData;
};

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
