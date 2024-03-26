import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureTimeFormComponent } from './departure-time-form.component';

describe('DepartureTimeFormComponent', () => {
	let component: DepartureTimeFormComponent;
	let fixture: ComponentFixture<DepartureTimeFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DepartureTimeFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DepartureTimeFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
