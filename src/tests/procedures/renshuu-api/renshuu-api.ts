import * as dotenv from 'dotenv';
import * as Renshuu from '../../../index';
import { TestIssue } from '../../testTypes';

dotenv.config();

export default async function (): Promise<TestIssue> {
	const client = new Renshuu.Client({
		renshuuApiKey: process.env.RENSHUU_API_KEY,
	});

	const profile: Renshuu.Profile = await client.getProfile();

	console.log(profile);

	return { exitCode: 0, data: 0 };
}
