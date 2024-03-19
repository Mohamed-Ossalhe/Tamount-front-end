import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'numberFormatter',
	standalone: true,
	pure: false,
})
export class NumberFormatterPipe implements PipeTransform {
	transform(value: number): string {
		const number: string = value.toString();
		let formattedNumber: string = '';
		if (number.startsWith('0')) {
			const firstPart: string = number.substring(1, 4);
			const secondPart: string = number.substring(4);
			formattedNumber = `${firstPart}-${secondPart}`;
		}
		return formattedNumber;
	}
}
