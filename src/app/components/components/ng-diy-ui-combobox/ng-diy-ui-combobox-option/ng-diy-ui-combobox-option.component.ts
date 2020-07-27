import {
	Component,
	Input,
	ContentChild,
	HostBinding,
	HostListener,
} from "@angular/core";
import { NgDiyUiIconComponent } from "../../ng-diy-ui-icon/ng-diy-ui-icon.component";

@Component({
	selector: "ng-diy-ui-combobox-option",
	templateUrl: "./ng-diy-ui-combobox-option.component.html",
	styleUrls: ["./ng-diy-ui-combobox-option.component.scss"],
})
export class NgDiyUiComboboxOptionComponent {
	@Input("text") text;
	@Input("value") value;

	@HostListener("click") onClick = () => {};

	@ContentChild(NgDiyUiIconComponent, { static: false }) icon: any;

	constructor() {}
}
