import { Component } from '@angular/core';
import { FooterLinks } from '@shared/types/footer-links.type';
import { RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';

@Component({
	selector: 'tamount-footer',
	standalone: true,
	imports: [RouterLink, ImageModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	footerSmallLogo: string = 'assets/primary-small-logo.png';
	date: Date = new Date();

	footerLinks: FooterLinks[] = [
		{
			heading: 'All directories',
			links: [
				{
					label: 'All carpool routes',
					routerLink: '/',
				},
				{
					label: 'All carpool destinations',
					routerLink: '/',
				},
			],
		},
		{
			heading: 'Top carpool routes',
			links: [
				{
					label: 'London → Manchester',
					routerLink: '/',
				},
				{
					label: 'Manchester → London',
					routerLink: '/',
				},
				{
					label: 'London → Birmingham',
					routerLink: '/',
				},
				{
					label: 'Birmingham → London',
					routerLink: '/',
				},
			],
		},
		{
			heading: 'About',
			links: [
				{
					label: 'How it works',
					routerLink: '/',
				},
				{
					label: 'About Us',
					routerLink: '/',
				},
				{
					label: 'Help Centre',
					routerLink: '/',
				},
				{
					label: 'We are Hiring',
					routerLink: '/',
				},
			],
		},
	];
}
