import * as chalk from 'chalk';
import { END_CODE, errors } from './types';

/**
 * A shortcut to the console.error function.
 */
const cslError = console.error;

/**
 * A shortcut to the console.log function.
 */
const cslLog = console.log;

/**
 * Display a yellow warning in the console.
 * @param message The message to display in the console.
 */
export function errString(message: string): void {
	cslLog(chalk.stderr.red(message));
}

/**
 * Display a red error in the console.
 * @param reason The end-of-call error code.
 */
export function errCode(reason: END_CODE): void {
	cslError(chalk.stderr.red.bold(`(${reason})`), chalk.stderr.red(errors[reason]));
}

/**
 * Log something into the console (standard output).
 * @param message The message to print.
 * @param optionalParams Some optional parameters.
 */
export function log(message?: string, ...optionalParams: unknown[]): void {
	cslLog(chalk.magenta(message, ...optionalParams));
}

/**
 * Log something into the console (standard output) in green.
 * @param message The message to print.
 * @param optionalParams Some optional parameters.
 */
export function success(message?: string, ...optionalParams: unknown[]): void {
	cslLog(chalk.green(message, ...optionalParams));
}

/**
 * Ends the programs with a given valid error message.
 * @param reason The end-of-call error code.
 */
export function exit(reason: END_CODE): void {
	cslError(chalk.stderr.red.bold(`(${reason})`), chalk.stderr.red(errors[reason]));
	cslError(chalk.stderr.red.bold.underline('END OF PROGRAM.'));
	process.exit(-1);
}
