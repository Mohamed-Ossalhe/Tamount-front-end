import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { IconComponent } from '@components/icon/icon.component';

interface EventItem {
	city: string;
	time: string;
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
	],
	templateUrl: './ride-details.component.html',
	styleUrl: './ride-details.component.scss',
})
export class RideDetailsComponent {
	events: EventItem[];

	constructor() {
		this.events = [
			{ city: 'Safi', time: '10:30', icon: 'pi-map-marker' },
			{ city: 'Agadir', time: '14:00', icon: 'pi-map-marker' },
		];
	}
}
