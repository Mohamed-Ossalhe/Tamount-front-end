import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLicencePlateFormComponent } from './vehicle-licence-plate-form.component';

describe('VehicleLicencePlateFormComponent', () => {
	let component: VehicleLicencePlateFormComponent;
	let fixture: ComponentFixture<VehicleLicencePlateFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VehicleLicencePlateFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VehicleLicencePlateFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
