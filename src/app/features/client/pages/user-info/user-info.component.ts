import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';

@Component({
	selector: 'tamount-user-info',
	standalone: true,
	imports: [ButtonModule, ImageModule, AvatarModule],
	templateUrl: './user-info.component.html',
	styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {}
