import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengConfig } from './config/primeng.config';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'Front-end';

	constructor(private primeNGConfiguration: PrimengConfig) {}

	ngOnInit(): void {
		this.primeNGConfiguration.init();
	}
}
