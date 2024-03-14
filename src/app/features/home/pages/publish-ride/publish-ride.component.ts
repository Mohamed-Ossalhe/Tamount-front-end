import { Component } from '@angular/core';
import { PublishRideHeroComponent } from '@features/home/components/publish-ride-hero/publish-ride-hero.component';

@Component({
	selector: 'tamount-publish-ride',
	standalone: true,
	imports: [PublishRideHeroComponent],
	templateUrl: './publish-ride.component.html',
	styleUrl: './publish-ride.component.scss',
})
export class PublishRideComponent {}
