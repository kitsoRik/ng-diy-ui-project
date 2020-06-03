import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiComboboxComponent } from "./ng-diy-ui-combobox.component";
import { NgDiyUiComboboxOptionComponent } from "./ng-diy-ui-combobox-option/ng-diy-ui-combobox-option.component";
import { NgDiyUiComboboxActiveOptionComponent } from "./ng-diy-ui-combobox-option/ng-diy-ui-combobox-active-option.component";
import { NgDiyUiComboboxOptionGroupComponent } from "./ng-diy-ui-combobox-option-group/ng-diy-ui-combobox-option-group.component";
import { NgDiyUiIconModule } from "../ng-diy-ui-icon/ng-diy-ui-icon.module";

@NgModule({
	declarations: [
		NgDiyUiComboboxComponent,
		NgDiyUiComboboxOptionComponent,
		NgDiyUiComboboxOptionGroupComponent,
		NgDiyUiComboboxActiveOptionComponent,
	],
	imports: [CommonModule, NgDiyUiIconModule],
	exports: [
		NgDiyUiComboboxComponent,
		NgDiyUiComboboxOptionComponent,
		NgDiyUiComboboxOptionGroupComponent,
		NgDiyUiComboboxActiveOptionComponent,
	],
	providers: [],
})
export class NgDiyUiComboboxModule {}
