import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDiyUiNavComponent } from "./ng-diy-ui-nav.component";
import { NgDiyUiNavItemComponent } from "./ng-diy-ui-nav-item/ng-diy-ui-nav-item.component";

@NgModule({
	declarations: [NgDiyUiNavComponent, NgDiyUiNavItemComponent],
	imports: [CommonModule],
	exports: [NgDiyUiNavComponent, NgDiyUiNavItemComponent],
	providers: [],
})
export class NgDiyUiNavModule {}
