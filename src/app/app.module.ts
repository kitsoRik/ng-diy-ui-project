import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { ButtonComponent } from "./pages/components/button/button.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/examples/home/home.component";
import { RadioComponent } from './pages/components/radio/radio.component';

@NgModule({
	declarations: [AppComponent, ButtonComponent, HomeComponent, RadioComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ComponentsModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
