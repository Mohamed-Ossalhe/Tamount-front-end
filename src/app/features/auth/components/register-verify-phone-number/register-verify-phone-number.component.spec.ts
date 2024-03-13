import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVerifyPhoneNumberComponent } from './register-verify-phone-number.component';

describe('RegisterVerifyPhoneNumberComponent', () => {
	let component: RegisterVerifyPhoneNumberComponent;
	let fixture: ComponentFixture<RegisterVerifyPhoneNumberComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterVerifyPhoneNumberComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterVerifyPhoneNumberComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
