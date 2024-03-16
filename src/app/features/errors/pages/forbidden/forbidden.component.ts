import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-forbidden',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './forbidden.component.html',
	styleUrl: './forbidden.component.scss',
})
export class ForbiddenComponent {
	svgElement: string = 'assets/svg/forbidden.svg';
}
