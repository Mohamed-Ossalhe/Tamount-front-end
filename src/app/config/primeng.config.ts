import { PrimeNGConfig } from 'primeng/api';

export class PrimengConfig {
	constructor(private primeNGConfig: PrimeNGConfig) {
		this.primeNGConfig.ripple = true;
		this.primeNGConfig.zIndex = {
			modal: 1100, // dialog, sidebar
			overlay: 1000, // dropdown, overlay panel
			menu: 1000, // overlay menus
			tooltip: 1100, // tooltip
		};
		this.primeNGConfig.filterMatchModeOptions = {
			date: [],
			text: [],
			numeric: [],
		};
		this.primeNGConfig.overlayOptions = {};
		this.primeNGConfig.translation = {};
		this.primeNGConfig.setTranslation({
			accept: 'Accept',
			reject: 'Cancel',
		});
	}
}
