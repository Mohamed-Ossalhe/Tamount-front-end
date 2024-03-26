import { TimeFormatterPipe } from './time-formater.pipe';

describe('TimeFormaterPipe', () => {
	it('create an instance', () => {
		const pipe = new TimeFormatterPipe();
		expect(pipe).toBeTruthy();
	});
});
