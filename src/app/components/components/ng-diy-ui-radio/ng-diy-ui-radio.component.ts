import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "ng-diy-ui-radio",
	templateUrl: "./ng-diy-ui-radio.component.html",
	styleUrls: ["./ng-diy-ui-radio.component.scss"],
})
export class NgDiyUiRadioComponent implements OnInit {
	private _checked: boolean = false;
	get checked(): boolean {
		return this._checked;
	}
	@Input() set checked(value) {
		this._checked = value;
	}

	@Output() checkedChange = new EventEmitter<boolean>();

	@Input() value: string;

	constructor() {}

	ngOnInit(): void {}

	onClick() {
		if (this.checked) return;
		this.checkedChange.emit(true);
	}
}
