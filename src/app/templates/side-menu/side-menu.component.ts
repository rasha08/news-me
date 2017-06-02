import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'app-side-menu',
	moduleId:module.id,
	templateUrl:'./side-menu.component.html',
	styleUrls:['./side-menu.component.css']
})
export class SideMenuComponent{
	@Input() sideMenu:any;
	@Input() showSideMenu:any;
	@Output() show = new EventEmitter();
	@Output() hideSide = new EventEmitter()
}