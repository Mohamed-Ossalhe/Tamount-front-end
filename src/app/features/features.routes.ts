import { Routes } from '@angular/router';

const clientRoutes: Routes = [
	{
		path: 'menu',
		loadComponent: () =>
			import('@features/client/pages/user-info/user-info.component').then(
				(c) => c.UserInfoComponent
			),
	},
	{
		path: 'account',
		loadComponent: () =>
			import(
				'@features/client/pages/account-settings/account-settings.component'
			).then((c) => c.AccountSettingsComponent),
	},
];

export const featuresRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('@features/home/pages/home/home.component').then(
				(c) => c.HomeComponent
			),
	},
	{
		path: 'search',
		loadComponent: () =>
			import('@features/home/pages/search-page/search-page.component').then(
				(c) => c.SearchPageComponent
			),
	},
	{
		path: 'authentication',
		loadChildren: () =>
			import('@features/auth/auth.routes').then((r) => r.authRoutes),
	},
	{
		path: 'profile',
		loadComponent: () =>
			import('@features/client/pages/profile/profile.component').then(
				(c) => c.ProfileComponent
			),
		children: clientRoutes,
	},
];
