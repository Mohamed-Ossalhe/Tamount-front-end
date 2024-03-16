import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-not-found',
	standalone: true,
	imports: [ImageModule, ButtonModule, RouterLink],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
	svgElement: string = 'assets/svg/not-found.svg';
}
