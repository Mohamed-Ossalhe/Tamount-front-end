import { Component, Signal } from '@angular/core';
import { SearchFilterComponent } from '@features/home/components/search-filter/search-filter.component';
import { RideCardComponent } from '@features/home/components/ride-card/ride-card.component';
import { UnderConstructionComponent } from '@features/errors/pages/under-construction/under-construction.component';
import { Router, RouterLink } from '@angular/router';
import { Ride } from '@models/ride';
import { Store } from '@ngrx/store';
import { selectRideCollection } from '@states/ride/ride.reducer';
import { LocationModel } from '@models/LocationModel';
import { RidePageActions } from '@states/ride/actions/ride.page.actions';

type SearchFilterType = {
	departure: LocationModel;
	arrival: LocationModel;
	date: string;
};
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
export class SearchPageComponent {
	rides: Signal<Ride[]> = this.store.selectSignal(selectRideCollection);
	searchFilters!: SearchFilterType;

	constructor(
		private store: Store,
		private router: Router
	) {
		store.dispatch(RidePageActions.enterSearchPage());
	}

	chooseRide(ride: Ride) {
		this.store.dispatch(RidePageActions.chooseRide({ ride }));
		this.router.navigateByUrl('/ride-details');
	}
}
