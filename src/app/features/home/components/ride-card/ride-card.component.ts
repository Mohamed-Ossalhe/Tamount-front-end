import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { AvatarModule } from 'primeng/avatar';
import { IconComponent } from '@components/icon/icon.component';

interface EventItem {
	city: string;
	time: string;
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
	],
	templateUrl: './ride-card.component.html',
	styleUrl: './ride-card.component.scss',
})
export class RideCardComponent {
	events: EventItem[];

	constructor() {
		this.events = [
			{ city: 'Safi', time: '10:30', icon: 'pi-map-marker' },
			{ city: 'Agadir', time: '14:00', icon: 'pi-map-marker' },
		];
	}
}
