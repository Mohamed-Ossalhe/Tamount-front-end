import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProfilePageActions } from '@states/profile/actions/profile.page.actions';

@Component({
	selector: 'tamount-profile',
	standalone: true,
	imports: [TabMenuModule, ButtonModule, RippleModule, BadgeModule, NgIf],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
	items: MenuItem[] | undefined;

	activeTabStyle: string =
		"text-tamount-primary font-medium after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-tamount-primary after:-bottom-2.5 after:left-0";

	constructor(private store: Store) {}

	ngOnInit() {
		this.items = [
			{ label: 'About you', icon: 'pi pi-fw pi-user', routerLink: 'menu' },
			{ label: 'Account', icon: 'pi pi-fw pi-cog', routerLink: 'account' },
		];
		this.store.dispatch(ProfilePageActions.pageEnter());
	}
}
