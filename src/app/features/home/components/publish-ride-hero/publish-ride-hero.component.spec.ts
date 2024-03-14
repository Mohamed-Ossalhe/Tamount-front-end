import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRideHeroComponent } from './publish-ride-hero.component';

describe('PublishRideHeroComponent', () => {
	let component: PublishRideHeroComponent;
	let fixture: ComponentFixture<PublishRideHeroComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PublishRideHeroComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PublishRideHeroComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
