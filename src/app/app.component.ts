import { Component, HostBinding } from "@angular/core";
import { ThemeManagerService } from "ng-multithemes-theme-manager";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "ng-diy-components";

	private _theme = "default";

	set theme(theme: string) {
		this._theme = theme;
		this.themeManager.setTheme(`assets/themes/${theme}.css`);
	}

	get theme(): string {
		return this._theme;
	}

	darkChecked: boolean;

	@HostBinding("style.background-color") get backgroundColor(): string {
		return this.darkChecked ? "black" : "white";
	}

	constructor(private themeManager: ThemeManagerService) {
		this.themeManager.setTheme("assets/themes/default.css");
	}

	al() {
		alert("A");
	}
}
