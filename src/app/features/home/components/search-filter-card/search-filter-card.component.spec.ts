import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterCardComponent } from './search-filter-card.component';

describe('SearchFilterCardComponent', () => {
	let component: SearchFilterCardComponent;
	let fixture: ComponentFixture<SearchFilterCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SearchFilterCardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SearchFilterCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
