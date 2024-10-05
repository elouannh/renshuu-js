import { errString, log, success } from '../index';
import { TestIssue, TestProcess } from './testTypes';
import * as fs from 'node:fs';

/**
 * The processes to test.
 */
const tests: TestProcess[] = [];

/**
 * Test a function and log its output.
 * @param testProcess The process function to test.
 * @param testId The id of the test.
 */
async function testProcess(testProcess: TestProcess, testId: string): Promise<void> {
	log(`Test ${testId}`);
	const startTime: number = Date.now();
	let result: Promise<TestIssue> | TestIssue = testProcess();

	if (result instanceof Promise) {
		success(`Async function detected.`);
		result = await result;
	}

	const endTime: number = Date.now();
	if (result === undefined) {
		const finalString: string = `${endTime - startTime}ms\t(void)\t[procedure: no data]\n`;
		log(`🔃\tRunning\t${finalString}`);
		return;
	}
	const finalString: string = `${endTime - startTime}ms\t(${typeof result.data})\t${result.data}\n`;
	if (result.exitCode == 0) success(`✅\tPassed\t${finalString}`);
	if (result.exitCode == 1) errString(`❌\tFailed\t${finalString}`);
}

/**
 * The main testing function.
 */
async function main() {
	let i: number = 0;
	for (const test of tests) {
		await testProcess(test, String(i));
		i++;
	}
	let procedure: unknown & { default: TestProcess };
	for (const procedureFolder of fs.readdirSync('./src/tests/procedures')) {
		procedure = require(`./procedures/${procedureFolder}/${procedureFolder}.js`);
		await testProcess(procedure.default, procedureFolder);
	}
}

main().catch((err: Error): void => {
	errString(err.stack);
});
