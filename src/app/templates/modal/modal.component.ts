import { Component, Input, Output, EventEmitter } from "@angular/core";
import{ News } from '../../clasess/news';


@Component({
	selector: 'app-modal',
	moduleId:module.id,
	templateUrl:'./modal.component.html',
	styleUrls:['./modal.component.css']
})
export class ModalComponent{
	@Input() selectedNews:any;
	@Output() like = new EventEmitter()
	@Output() unlike = new EventEmitter()
}
