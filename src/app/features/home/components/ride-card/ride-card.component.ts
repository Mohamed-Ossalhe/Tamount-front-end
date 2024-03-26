import { Component, effect, input, InputSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { AvatarModule } from 'primeng/avatar';
import { IconComponent } from '@components/icon/icon.component';
import { Ride } from '@models/ride';
import { TimeFormatterPipe } from '@pipes/time-formater.pipe';
import { DatePipe, NgClass } from '@angular/common';

interface EventItem {
	city: string;
	time?: string;
	icon: string;
}

@Component({
	selector: 'tamount-ride-card',
	standalone: true,
	imports: [
		ButtonModule,
		SharedModule,
		TimelineModule,
		AvatarModule,
		IconComponent,
		NgClass,
	],
	providers: [TimeFormatterPipe, DatePipe],
	templateUrl: './ride-card.component.html',
	styleUrl: './ride-card.component.scss',
})
export class RideCardComponent {
	events!: EventItem[];
	ride: InputSignal<Ride> = input.required<Ride>();

	constructor(
		private timeFormatter: TimeFormatterPipe,
		private datePipe: DatePipe
	) {
		effect(() => {
			console.log(datePipe.transform(this.ride().departureTime, 'EEE, dd MMMM'));
			this.events = [
				{
					city: this.ride().departure.city.name,
					time: timeFormatter.transform(this.ride().departureTime),
					icon: 'pi-map-marker',
				},
				{ city: this.ride().arrival.city.name, icon: 'pi-map-marker' },
			];
		});
	}
}
