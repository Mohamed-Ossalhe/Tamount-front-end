import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsFormComponent } from './seats-form.component';

describe('SeatsFormComponent', () => {
	let component: SeatsFormComponent;
	let fixture: ComponentFixture<SeatsFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SeatsFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SeatsFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
