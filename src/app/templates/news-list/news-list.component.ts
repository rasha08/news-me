import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'app-news-list',
	moduleId:module.id,
	templateUrl: './news-list.component.html',
	styleUrls:['./news-list.component.css']
})
export class NewsListComponent{
	@Input() news:Array<any>
	@Output() showBig= new EventEmitter();
	@Output() search = new EventEmitter();
	@Output() showSide = new EventEmitter();
	@Input() message:string;
}
