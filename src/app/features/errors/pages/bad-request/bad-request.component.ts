import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-bad-request',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './bad-request.component.html',
	styleUrl: './bad-request.component.scss',
})
export class BadRequestComponent {
	svgElement: string = 'assets/svg/bad-request.svg';
}
