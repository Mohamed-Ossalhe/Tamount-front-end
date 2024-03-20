import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { IconComponent } from '@components/icon/icon.component';
import { ButtonModule } from 'primeng/button';

interface EventItem {
	city: string;
	time: string;
	icon: string;
}

@Component({
	selector: 'tamount-booking-request-details',
	standalone: true,
	imports: [SharedModule, TimelineModule, IconComponent, ButtonModule],
	templateUrl: './booking-request-details.component.html',
	styleUrl: './booking-request-details.component.scss',
})
export class BookingRequestDetailsComponent {
	events: EventItem[];

	constructor() {
		this.events = [
			{ city: 'Safi', time: '10:30', icon: 'pi-map-marker' },
			{ city: 'Agadir', time: '14:00', icon: 'pi-map-marker' },
		];
	}
}
