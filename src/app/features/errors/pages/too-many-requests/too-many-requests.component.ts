import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-too-many-requests',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './too-many-requests.component.html',
	styleUrl: './too-many-requests.component.scss',
})
export class TooManyRequestsComponent {
	svgElement: string = 'assets/svg/too-many-request.svg';
}
