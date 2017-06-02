import { Component, Input, Output, EventEmitter } from "@angular/core";
 

@Component({
	selector: 'app-news-history',
	templateUrl: './news-history.component.html',
	styleUrls:['./news-history.component.css']
})
export class NewsHistoryComponent{
@Input() newsHistory:Array<any>
@Output() remove = new EventEmitter();
@Output() clear = new EventEmitter();
}