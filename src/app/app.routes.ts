import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('@layouts/client-layout/client-layout.component').then(
				(c) => c.ClientLayoutComponent
			),
	},
	{
		path: 'admin',
		loadComponent: () =>
			import('@layouts/admin-layout/admin-layout.component').then(
				(c) => c.AdminLayoutComponent
			),
	},
];
