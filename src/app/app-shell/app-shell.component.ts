import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {NgxTinySliderSettingsInterface} from 'ngx-tiny-slider';

import * as bsn from '../../assets/styles/bootstrap-native-v4';

@Component({
	selector: 'app-shell',
	templateUrl: './app-shell.component.html',
	styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit {

	constructor() { }
	

	@ViewChild('carousel') slider:ElementRef;
	tinySliderConfig: NgxTinySliderSettingsInterface;



	ngOnInit() {
	// 	this.tinySliderConfig = {
	// 		arrowKeys: true,
	// 		autoWidth: true,
	// 		gutter: 10,
	// 		controlsText: ['<', '>'],
	// 		items: 2,
	// 		mouseDrag: true,
	// 		navAsThumbnails: true
			
	// 	};

		//console.log(this.slider.nativeElement);
		let carousel = this.slider.nativeElement as HTMLElement;

		this.tinySliderConfig = {
			arrowKeys: true,
			autoWidth: true,
			gutter: 10,
			controlsText: ['<', '>'],
			mouseDrag: true,
			container: carousel,
			items: 3,
			controlsContainer: "#customize-controls",
			navContainer: "#customize-thumbnails",
			navAsThumbnails: true,
			autoplay: true,
			autoplayTimeout: 1000,
			autoplayButton: "#customize-toggle",
			swipeAngle: false,
			speed: 400
		};
	}

	browse = {
		types: [ 'Apartment, Studio, Loft, Home, Special Deals'	],
		areas: [ 'Cambridge, Backbay, Somerville, North End']
	}

	clickedMe(btn){
		console.log(btn);
	}

}
