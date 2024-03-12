import { Component } from '@angular/core';
import { SearchFilterComponent } from '@features/home/components/search-filter/search-filter.component';

@Component({
	selector: 'tamount-search-page',
	standalone: true,
	imports: [SearchFilterComponent],
	templateUrl: './search-page.component.html',
	styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {}
