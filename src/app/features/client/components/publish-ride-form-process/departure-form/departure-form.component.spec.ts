import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureFormComponent } from './departure-form.component';

describe('DepartureFormComponent', () => {
	let component: DepartureFormComponent;
	let fixture: ComponentFixture<DepartureFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DepartureFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DepartureFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
