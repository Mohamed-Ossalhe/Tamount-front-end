import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-unauthorized',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './unauthorized.component.html',
	styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {
	svgElement: string = 'assets/svg/unauthorized.svg';
}
