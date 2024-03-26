import { Component, effect, Signal } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { IconComponent } from '@components/icon/icon.component';
import { ButtonModule } from 'primeng/button';
import { Ride } from '@models/ride';
import { selectRide } from '@states/ride/ride.reducer';
import { TimeFormatterPipe } from '@pipes/time-formater.pipe';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { ApprovalMode } from '@enums/approval-mode';
import { RouterLink } from '@angular/router';

interface EventItem {
	city: string;
	time?: string;
	icon: string;
}

@Component({
	selector: 'tamount-booking-request-details',
	standalone: true,
	imports: [
		SharedModule,
		TimelineModule,
		IconComponent,
		ButtonModule,
		RouterLink,
	],
	providers: [TimeFormatterPipe, DatePipe],
	templateUrl: './booking-request-details.component.html',
	styleUrl: './booking-request-details.component.scss',
})
export class BookingRequestDetailsComponent {
	events!: EventItem[];
	ride: Signal<Ride> = this.store.selectSignal(selectRide) as Signal<Ride>;
	date!: string;
	constructor(
		private timeFormatter: TimeFormatterPipe,
		private datePipe: DatePipe,
		private store: Store
	) {
		effect(() => {
			console.log(this.ride());
			this.date = this.datePipe.transform(this.ride().departureTime) as string;
			this.events = [
				{
					city: this.ride().departure.city.name,
					time: this.timeFormatter.transform(this.ride().departureTime),
					icon: 'pi-map-marker',
				},
				{ city: this.ride().arrival.city.name, icon: 'pi-map-marker' },
			];
		});
	}

	protected readonly ApprovalMode = ApprovalMode;
}
