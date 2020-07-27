import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiRadioComponent } from "./ng-diy-ui-radio.component";
import { FormsModule } from "@angular/forms";
import { NgDiyUiRadioGroupComponent } from "./ng-diy-ui-radio-group/ng-diy-ui-radio-group.component";

@NgModule({
	declarations: [NgDiyUiRadioComponent, NgDiyUiRadioGroupComponent],
	imports: [CommonModule, FormsModule],
	exports: [NgDiyUiRadioComponent, NgDiyUiRadioGroupComponent],
	providers: [],
})
export class NgDiyUiRadioModule {}
