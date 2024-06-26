import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNameComponent } from './register-name.component';

describe('RegisterNameComponent', () => {
	let component: RegisterNameComponent;
	let fixture: ComponentFixture<RegisterNameComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RegisterNameComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RegisterNameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
