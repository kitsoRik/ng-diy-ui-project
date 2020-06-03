import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonComponent } from "./pages/components/button/button.component";
import { HomeComponent } from "./pages/examples/home/home.component";

const routes: Routes = [
	{ path: "button", component: ButtonComponent },
	{ path: "examples/home", component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
