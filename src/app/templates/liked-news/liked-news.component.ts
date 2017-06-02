import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
	selector: 'app-liked-news',
	templateUrl: './liked-news.component.html',
	styleUrls:['./liked-news.components.css']
})
export class LikedNewsComponent{

	constructor(){}

	@Input() likedNews:Array<any>;
	@Output() remove = new EventEmitter();
	@Output() clear = new EventEmitter();

}