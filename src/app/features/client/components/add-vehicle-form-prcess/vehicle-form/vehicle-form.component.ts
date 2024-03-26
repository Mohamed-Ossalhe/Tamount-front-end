import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'tamount-vehicle-form',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './vehicle-form.component.html',
	styleUrl: './vehicle-form.component.scss',
})
export class VehicleFormComponent {}
