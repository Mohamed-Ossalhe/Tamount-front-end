import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalFormComponent } from './arrival-form.component';

describe('ArrivalFormComponent', () => {
	let component: ArrivalFormComponent;
	let fixture: ComponentFixture<ArrivalFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ArrivalFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ArrivalFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
