import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiButtonModule } from "./components/ng-diy-ui-button/ng-diy-ui-button.module";
import { NgDiyUiFixedSidePanelModule } from "./components/ng-diy-ui-fixed-side-panel/ng-diy-ui-fixed-side-panel.module";
import { NgDiyUiToggleModule } from "./components/ng-diy-ui-toggle/ng-diy-ui-toggle.module";
import { NgDiyUiTextModule } from "./components/ng-diy-ui-text/ng-diy-ui-text.module";
import { NgDiyUiLabelModule } from "./components/ng-diy-ui-label/ng-diy-ui-label.module";
import { NgDiyUiTextFieldModule } from "./components/ng-diy-ui-text-field/ng-diy-ui-text-field.module";
import { NgDiyUiComboboxModule } from "./components/ng-diy-ui-combobox/ng-diy-ui-combobox.module";
import { NgDiyUiNavModule } from "./components/ng-diy-ui-nav/ng-diy-ui-nav.module";
import { NgDiyUiRadioModule } from "./components/ng-diy-ui-radio/ng-diy-ui.radio.module";
import { NgDiyUiGroupBoxModule } from "./components/ng-diy-ui-group-box/ng-diy-ui-group-box.module";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgDiyUiButtonModule,
		NgDiyUiFixedSidePanelModule,
		NgDiyUiToggleModule,
		NgDiyUiTextModule,
		NgDiyUiLabelModule,
		NgDiyUiTextFieldModule,
		NgDiyUiComboboxModule,
		NgDiyUiNavModule,
		NgDiyUiRadioModule,
		NgDiyUiGroupBoxModule,
	],
	exports: [
		NgDiyUiButtonModule,
		NgDiyUiFixedSidePanelModule,
		NgDiyUiToggleModule,
		NgDiyUiTextModule,
		NgDiyUiLabelModule,
		NgDiyUiTextFieldModule,
		NgDiyUiComboboxModule,
		NgDiyUiNavModule,
		NgDiyUiRadioModule,
		NgDiyUiGroupBoxModule,
	],
	providers: [],
})
export class ComponentsModule {}
