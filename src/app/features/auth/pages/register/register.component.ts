import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'tamount-register',
	standalone: true,
	imports: [RouterOutlet, RouterLink, DividerModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent {}
