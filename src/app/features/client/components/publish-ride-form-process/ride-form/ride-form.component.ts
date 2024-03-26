import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'tamount-ride-form',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './ride-form.component.html',
	styleUrl: './ride-form.component.scss',
})
export class RideFormComponent {}
