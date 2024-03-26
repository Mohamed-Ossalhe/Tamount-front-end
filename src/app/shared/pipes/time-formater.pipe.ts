import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFormatter',
	standalone: true,
})
export class TimeFormatterPipe implements PipeTransform {
	transform(value: string | Date): string {
		const date: Date = new Date(value);

		const splitTime: string[] = date.toTimeString().split(':');
		return `${splitTime[0]}:${splitTime[1]}`;
	}
}
