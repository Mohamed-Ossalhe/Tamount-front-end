import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('@layouts/client-layout/client-layout.component').then(
				(c) => c.ClientLayoutComponent
			),
		loadChildren: () =>
			import('@features/features.routes').then((r) => r.featuresRoutes),
	},
	{
		path: 'admin',
		loadComponent: () =>
			import('@layouts/admin-layout/admin-layout.component').then(
				(c) => c.AdminLayoutComponent
			),
	},
];
