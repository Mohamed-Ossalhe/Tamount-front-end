import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@components/icon/icon.component';
import { RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { NavigationItem } from '@shared/types/navigation-item-type';

@Component({
	selector: 'tamount-navbar',
	standalone: true,
	imports: [
		ButtonModule,
		IconComponent,
		RouterLink,
		ImageModule,
		AvatarModule,
		TieredMenuModule,
		MenuModule,
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
	navbarLogo: string = 'assets/primary-logo.png';
	navigationItems: NavigationItem[] | undefined;
	menuItems: MenuItem[] | undefined;

	ngOnInit() {
		this.menuItems = [
			{
				label: 'Log in',
				icon: 'pi pi-profile',
				routerLink: 'authentication/login',
			},
			{
				label: 'Sign up',
				icon: 'pi pi-profile',
				routerLink: 'authentication/register',
			},
		];

		this.navigationItems = [
			{
				routerLink: '/search',
				label: 'Search',
				icon: 'search',
			},
			{
				routerLink: '/',
				label: 'Publish a ride',
				icon: 'plus-circle',
			},
		];
	}
}
