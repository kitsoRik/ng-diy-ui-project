import { Component, OnInit } from "@angular/core";

let st = "./radio.component.scss";

@Component({
	templateUrl: "./radio.component.html",
	styleUrls: [st],
})
export class RadioComponent implements OnInit {
	checked: boolean = false;
	checked1: boolean = false;

	customGroup1 = {
		0: false,
		1: true,
	};

	value: string = "123";

	constructor() {
		st = "123";
	}

	ngOnInit(): void {}
}
