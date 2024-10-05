/**
 * Represents a basic asynchronous-or-not function.
 * @returns The test issue (an exit code and some data).
 */
export type TestProcess = () => Promise<TestIssue> | TestIssue;

/**
 * The returned value of a tested process.
 */
export interface TestIssue {
	exitCode: 0 | 1;
	data: unknown;
}
