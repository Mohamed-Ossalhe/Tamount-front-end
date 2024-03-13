import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMethodsComponent } from './login-methods.component';

describe('LoginMethodsComponent', () => {
	let component: LoginMethodsComponent;
	let fixture: ComponentFixture<LoginMethodsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginMethodsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginMethodsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
