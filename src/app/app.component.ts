import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "ng-diy-components";

	darkChecked: boolean;

	@HostBinding("style.background-color") get backgroundColor(): string {
		return this.darkChecked ? "black" : "white";
	}

	al() {
		alert("A");
	}
}
