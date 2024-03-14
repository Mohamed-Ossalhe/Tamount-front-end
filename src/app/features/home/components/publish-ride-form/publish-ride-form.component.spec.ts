import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRideFormComponent } from './publish-ride-form.component';

describe('PublishRideFormComponent', () => {
	let component: PublishRideFormComponent;
	let fixture: ComponentFixture<PublishRideFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PublishRideFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PublishRideFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
