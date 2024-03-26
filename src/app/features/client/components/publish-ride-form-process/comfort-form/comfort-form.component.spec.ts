import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortFormComponent } from './comfort-form.component';

describe('ComfortFormComponent', () => {
	let component: ComfortFormComponent;
	let fixture: ComponentFixture<ComfortFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ComfortFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ComfortFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
