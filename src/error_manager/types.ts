/**
 * Some constants in an enumeration that describes some errors that can happen in the process.
 */
export enum END_CODE {
	INVALID_TOKEN_PROVIDED = 'INVALID_TOKEN_PROVIDED',
}

/**
 * The object that contains all the values from the enumeration associated string.
 */
export const errors: Record<END_CODE, string> = {
	[END_CODE.INVALID_TOKEN_PROVIDED]: 'An invalid token was provided, or it is just non-existent.',
} as const;

/**
 * The possible exit code at the end of a command callback method call.
 */
export enum EXIT_CODE {
	SUCCESS = 0,
	ERROR = 1,
}
