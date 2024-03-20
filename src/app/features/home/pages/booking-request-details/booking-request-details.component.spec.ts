import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestDetailsComponent } from './booking-request-details.component';

describe('BookingRequestDetailsComponent', () => {
	let component: BookingRequestDetailsComponent;
	let fixture: ComponentFixture<BookingRequestDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BookingRequestDetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(BookingRequestDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
