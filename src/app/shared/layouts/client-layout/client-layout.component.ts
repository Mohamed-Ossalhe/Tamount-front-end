import { Component } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'tamount-client-layout',
	standalone: true,
	imports: [NavbarComponent, FooterComponent, RouterOutlet],
	templateUrl: './client-layout.component.html',
	styleUrl: './client-layout.component.scss',
})
export class ClientLayoutComponent {}
