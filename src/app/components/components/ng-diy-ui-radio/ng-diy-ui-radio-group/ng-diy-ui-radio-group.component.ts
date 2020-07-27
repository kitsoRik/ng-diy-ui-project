import {
	Component,
	OnInit,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Output,
	EventEmitter,
	Input,
} from "@angular/core";
import { NgDiyUiRadioComponent } from "../ng-diy-ui-radio.component";

@Component({
	selector: "ng-diy-ui-radio-group",
	templateUrl: "./ng-diy-ui-radio-group.component.html",
	styleUrls: ["./ng-diy-ui-radio-group.component.scss"],
})
export class NgDiyUiRadioGroupComponent implements AfterContentInit {
	@ContentChildren(NgDiyUiRadioComponent) radios: QueryList<
		NgDiyUiRadioComponent
	>;

	private _value;

	@Input() set value(value: string) {
		this._value = value;
		this.checkByValue();
	}

	@Output() valueChange = new EventEmitter<string>(false);

	constructor() {}

	ngAfterContentInit(): void {
		this.checkByValue();
		this.radios.forEach((radio) => {
			radio.checkedChange.subscribe((isChecked) => {
				if (!isChecked) return true;

				if (this._value) {
					this.valueChange.emit(radio.value);
				} else {
					this.uncheckAllExceptOne(radio, false);
				}
			});
		});
	}

	uncheckAllExceptOne(component: NgDiyUiRadioComponent, force: boolean) {
		this.radios.forEach((radio) => {
			if (radio === component) return;
			if (!radio.checked) return;

			if (force) radio.checked = false;
			else radio.checkedChange.emit(false);
		});
	}

	checkByValue() {
		if (!this._value) return;
		if (!!this.radios) {
			const currentRadio = this.radios.find(
				(r) => r.value === this._value
			);
			if (currentRadio) {
				this.uncheckAllExceptOne(currentRadio, true);
				currentRadio.checked = true;
			}
		}
	}
}
