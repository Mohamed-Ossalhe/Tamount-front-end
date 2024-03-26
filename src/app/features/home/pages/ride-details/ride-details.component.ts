import { Component, effect, Signal } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { IconComponent } from '@components/icon/icon.component';
import { Ride } from '@models/ride';
import { TimeFormatterPipe } from '@pipes/time-formater.pipe';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectRide } from '@states/ride/ride.reducer';
import { VerificationStatus } from '@enums/verification-status';
import { ApprovalMode } from '@enums/approval-mode';
import { PreferenceStatus } from '@enums/preference-status';
import { RouterLink } from '@angular/router';

interface EventItem {
	city: string;
	time?: string;
	icon: string;
}

@Component({
	selector: 'tamount-ride-details',
	standalone: true,
	imports: [
		TimelineModule,
		ButtonModule,
		DividerModule,
		AvatarModule,
		IconComponent,
		RouterLink,
	],
	providers: [TimeFormatterPipe, DatePipe],
	templateUrl: './ride-details.component.html',
	styleUrl: './ride-details.component.scss',
})
export class RideDetailsComponent {
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
					time: timeFormatter.transform(this.ride().departureTime),
					icon: 'pi-map-marker',
				},
				{ city: this.ride().arrival.city.name, icon: 'pi-map-marker' },
			];
		});
	}

	protected readonly VerificationStatus = VerificationStatus;
	protected readonly ApprovalMode = ApprovalMode;
	protected readonly PreferenceStatus = PreferenceStatus;
}
