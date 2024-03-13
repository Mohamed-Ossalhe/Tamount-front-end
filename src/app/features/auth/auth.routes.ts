import { Routes } from '@angular/router';

export const authRoutes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadComponent: () =>
			import('@features/auth/pages/login/login.component').then(
				(c) => c.LoginComponent
			),
		children: [
			{
				path: '',
				loadComponent: () =>
					import(
						'@features/auth/components/login-methods/login-methods.component'
					).then((c) => c.LoginMethodsComponent),
			},
			{
				path: 'email',
				loadComponent: () =>
					import('@features/auth/components/login-form/login-form.component').then(
						(c) => c.LoginFormComponent
					),
			},
		],
	},
	{
		path: 'register',
		loadComponent: () =>
			import('@features/auth/pages/register/register.component').then(
				(c) => c.RegisterComponent
			),
		children: [
			{
				path: '',
				loadComponent: () =>
					import(
						'@features/auth/components/register-methods/register-methods.component'
					).then((c) => c.RegisterMethodsComponent),
			},
		],
	},
];
