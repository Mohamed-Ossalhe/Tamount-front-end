import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthMethodType } from '@shared/types/auth-method.type';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'tamount-register-methods',
	standalone: true,
	imports: [ButtonModule, RouterLink],
	templateUrl: './register-methods.component.html',
	styleUrl: './register-methods.component.scss',
})
export class RegisterMethodsComponent {
	registerMethods: AuthMethodType[] = [
		{
			label: 'Continue with google',
			url: 'www.google.com',
			icon: 'pi pi-google',
		},
		{
			label: 'Continue with email',
			url: '/email',
			icon: 'pi pi-envelope',
		},
	];
}
