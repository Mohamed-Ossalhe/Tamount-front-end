import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-under-construction',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './under-construction.component.html',
	styleUrl: './under-construction.component.scss',
})
export class UnderConstructionComponent {
	svgElement: string = 'assets/svg/under-construction.svg';
}
