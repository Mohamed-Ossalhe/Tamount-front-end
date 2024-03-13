import { Routes } from '@angular/router';

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
];
