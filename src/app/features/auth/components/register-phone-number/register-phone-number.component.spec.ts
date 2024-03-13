import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhoneNumberComponent } from './register-phone-number.component';

describe('RegisterPhoneNumberComponent', () => {
	let component: RegisterPhoneNumberComponent;
	let fixture: ComponentFixture<RegisterPhoneNumberComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterPhoneNumberComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterPhoneNumberComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
