import { Component, OnInit, Input, HostBinding } from "@angular/core";

export type NgDiyUiTextTags =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "span"
	| "p";
export type NgDiyUiTextType = "title" | "subtitle" | "text";

@Component({
	selector: "ng-diy-ui-text",
	templateUrl: "./ng-diy-ui-text.component.html",
	styleUrls: ["./ng-diy-ui-text.component.scss"],
})
export class NgDiyUiTextComponent implements OnInit {
	@Input("type") type: NgDiyUiTextTags | NgDiyUiTextType = "text";
	@Input("align") align: "left" | "center" | "right" = "left";

	@HostBinding("style.color") styleColor: string = "black;";
	@Input("color") set(color: string) {
		this.styleColor = color;
	}

	constructor() {}

	ngOnInit() {}
}
