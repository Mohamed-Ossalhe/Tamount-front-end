import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBirthyearComponent } from './register-birthyear.component';

describe('RegisterBirthyearComponent', () => {
	let component: RegisterBirthyearComponent;
	let fixture: ComponentFixture<RegisterBirthyearComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterBirthyearComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterBirthyearComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
