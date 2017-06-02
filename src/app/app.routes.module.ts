import {NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./templates/home/home.component";
import { BusinessComponent } from "./templates/business/business.component";
import { EntertainmentComponent } from "./templates/entertainment/entertainment.component";
import { SportComponent } from "./templates/sport/sport.component";
import { TechnologyComponent } from "./templates/technology/technology.component";

const routes:Routes = [
	{
		path: '', 
		component:HomeComponent
	},
	{
		path: 'business',
		component:BusinessComponent 
	},
	{
		path: 'entertainment',
		component: EntertainmentComponent
	},
	{
		path: 'sport',
		component: SportComponent
	},
	{
		path:'technology',
		component:TechnologyComponent
	},
	{
		path: '**',
		component:HomeComponent
	},
	{
		path:'home',
		component:HomeComponent
	}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule],
	providers:[]
})
export class AppRouter{

}