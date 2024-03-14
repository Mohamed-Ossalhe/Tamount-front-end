import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { SearchFilterCardComponent } from '@features/home/components/search-filter-card/search-filter-card.component';
import { PublishRideFormComponent } from '@features/home/components/publish-ride-form/publish-ride-form.component';

@Component({
	selector: 'tamount-publish-ride-hero',
	standalone: true,
	imports: [ImageModule, SearchFilterCardComponent, PublishRideFormComponent],
	templateUrl: './publish-ride-hero.component.html',
	styleUrl: './publish-ride-hero.component.scss',
})
export class PublishRideHeroComponent {
	svgElement: string = 'assets/svg/Carpool-amico.svg';
}
