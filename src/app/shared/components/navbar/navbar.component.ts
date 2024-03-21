import { Component, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@components/icon/icon.component';
import { RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { NavigationItem } from '@shared/types/navigation-item-type';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '@states/authentication/authentication.reducer';

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
	authMenuItems: MenuItem[] | undefined;
	isUserAuthenticated: Signal<boolean> = this.store.selectSignal(
		selectIsAuthenticated
	);

	constructor(private store: Store) {}

	ngOnInit() {
		this.menuItems = [
			{
				label: 'Profile',
				icon: 'pi pi-user',
				routerLink: 'profile',
			},
			{
				label: 'Log out',
				icon: 'pi pi-times-circle',
				routerLink: 'authentication/logout',
			},
		];
		this.authMenuItems = [
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
				routerLink: '/publish-ride',
				label: 'Publish a ride',
				icon: 'plus-circle',
			},
		];
	}
}
