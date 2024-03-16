import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-server-error',
	standalone: true,
	imports: [ButtonModule, ImageModule, RouterLink],
	templateUrl: './server-error.component.html',
	styleUrl: './server-error.component.scss',
})
export class ServerErrorComponent {
	svgElement: string = 'assets/svg/server-error.svg';
}
