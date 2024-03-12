import { Component } from '@angular/core';
import { HeroComponent } from '@features/home/components/hero/hero.component';

@Component({
	selector: 'tamount-home',
	standalone: true,
	imports: [HeroComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
