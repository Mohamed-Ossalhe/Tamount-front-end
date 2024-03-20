import { Component } from '@angular/core';
import { SearchFilterComponent } from '@features/home/components/search-filter/search-filter.component';
import { RideCardComponent } from '@features/home/components/ride-card/ride-card.component';
import { UnderConstructionComponent } from '@features/errors/pages/under-construction/under-construction.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-search-page',
	standalone: true,
	imports: [
		SearchFilterComponent,
		RideCardComponent,
		UnderConstructionComponent,
		RouterLink,
	],
	templateUrl: './search-page.component.html',
	styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {}
