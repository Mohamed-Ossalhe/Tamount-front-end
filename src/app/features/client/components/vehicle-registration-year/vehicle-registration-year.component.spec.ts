import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRegistrationYearComponent } from './vehicle-registration-year.component';

describe('VehicleRegistrationYearComponent', () => {
	let component: VehicleRegistrationYearComponent;
	let fixture: ComponentFixture<VehicleRegistrationYearComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VehicleRegistrationYearComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VehicleRegistrationYearComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
