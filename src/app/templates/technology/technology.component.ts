import { Component, OnInit } from '@angular/core';
import {News} from '../../clasess/news';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { TechCrunchDataService } from "../../services/technology/tech-crunch-data-service";
import { EngadgetDataService } from '../../services/technology/engadget-data-service';
import { HackerNewsDataService } from '../../services/technology/hacker-news-data-service';
import { RecodeDataService } from '../../services/technology/recode-data-service';
import { TechRadarDataService } from '../../services/technology/techradar-data-service';
import { TheNextWebDataService } from '../../services/technology/next-web-data-service';
import { TheVergeDataService } from '../../services/technology/verge-data-service';


@Component({
	selector:'app-technology',
	moduleId:module.id,
	templateUrl:'technology.component.html',
	styleUrls:['technology.component.css']
})
export class TechnologyComponent implements OnInit{
	errorMessage: string;
	news:News[]=[];
	allNews:Array<any>=[]
	selectedNews:any={};
	newsHistory:Array<any>
  	likedNews:Array<any>=[]
  	message:string;
	showSideMenu:boolean=false;
	techCrunch:News[];
	engadget:News[];
	hackerNews:News[];
	recode:News[];
	techRadar:News[];
	nextWeb:News[];
	verge:News[];

	constructor(
		private techCrunchDataService:TechCrunchDataService,
		private engadgetDataService:EngadgetDataService,
		private hackerNewsDataService:HackerNewsDataService,
		private recodeDataService:RecodeDataService,
		private techRadarDataService:TechRadarDataService,
		private theNextWebDataService:TheNextWebDataService,
		private theVergeDataService:TheVergeDataService
	){

	}
	ngOnInit(){
		this.checkIsNewsInNewsHistory()
		this.checkIsNewsInLikedNews()
		this.getNews();
		this.fillNews();
	}
	getNews(){
		this.getTechCrunchNews()
		this.getEngadgetNews()
		this.getHackerNews()
		this.getRecodeNews()
		this.getTechRadarNews()
		this.getNextWebNews()
		this.getVergeNews()
	}
	getTechCrunchNews(){
		this.techCrunchDataService.getNews().subscribe(
			news => {
				this.techCrunch = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getEngadgetNews(){
		this.engadgetDataService.getNews().subscribe(
			news => {
				this.engadget = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getHackerNews(){
		this.hackerNewsDataService.getNews().subscribe(
			news => {
				this.hackerNews = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getRecodeNews(){
		this.recodeDataService.getNews().subscribe(
			news => {
				this.recode = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getTechRadarNews(){
		this.techRadarDataService.getNews().subscribe(
			news => {
				this.techRadar = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getNextWebNews(){
		this.theNextWebDataService.getNews().subscribe(
			news => {
				this.nextWeb = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getVergeNews(){
		this.theVergeDataService.getNews().subscribe(
			news => {
				this.verge = news;				
				news.map(single => this.allNews.push(single));
				this.fillNews();
			},
			error => this.errorMessage = <any>error
		)
	}
	sideMenu:Array<any>=[
		{
			name : 'TECHCRUNCH',
			show : 'techCrunch'
		},
		{
			name: 'ENGADGET',
			show: 'engadget'
		},
		{
			name: 'HACKER NEWS',
			show: 'hackerNews'
		},
		{
			name: 'RECODE',
			show: 'recode'
		},
		{
			name: 'TECHRADAR',
			show: 'techRadar'
		},
		{
			name: 'THE NEXT WEB',
			show: 'nextWeb'
		},
		{
			name: 'THE VERGE',
			show: 'verge'
		}
	]

	/**
	 *
	 * @param param
	 */
	show(param:string){
		this.news = this[param];
	}
	/**
	 *
	 *
	 * @param {*} event
	 *
	 * @memberof SportComponent
	 */
	search(event:any){
		this.message=' Sorry, we did not find any news matching your search. Please try again, or browse all news...';
		if(event.target.value){
		this.news = this.allNews.filter(function(single){
			return `${single.title} ${single.description}`.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;});
		}else{
			this.fillNews()
		}
	}
	/**
	 * 
	 * 
	 * @param {*} param 
	 * 
	 * @memberof HomeComponent
	 */
	showBig(param:any){
		this.selectedNews = param;
		param.isRead=true;
		this.addToNewsHistory(param);
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof HomeComponent
	 */
	fillNews(){
		//Checking News History//
		if(this.getNewsHistory()){
			let readNews = this.getNewsHistory()
			for(let single of this.allNews){
				for(let readnews of readNews){
					if(single.title === readnews.title && single.source === readnews.source){
						single.isRead=true;
					}
				}
			}
		}
		//Checking Liked News//
		if(this.getLikedNews()){
			let liked = this.getLikedNews()
			
			for(let single of this.allNews){
				for(let like of liked){
					if(single.title === like.title && single.source === like.source){
						single.liked = true
					}
				}
			}
		}
		this.news = this.allNews
								.filter(single=>{
									if(single.description){
										if(single.description.length>150){
											return true
										}
									}
									else{
										return false;
									}
								})
								.sort((a,b)=>{
									if(a.title[0]>b.title[0]){
										return 1;
									}else if(a.title[0]<b.title[0]){
										return -1
									}else{
										return 0;
									}
								})
	}
	/**
	 * 
	 * 
	 * @protected
	 * 
	 * @memberof HomeComponent
	 */
	protected checkIsNewsInNewsHistory(){
		if(!localStorage.getItem('newsHistory')){
			this.newsHistory=[];
  		}else{
			  this.newsHistory = this.getNewsHistory()
		  }

	}
    /**
	 *
	 * 
	 * @protected
	 * @param {*} param 
	 * 
	 * @memberof HomeComponent
	 */
	protected addToNewsHistory(param:any){
		let newsForHistory = {
			title:param.title,
			source:param.source,
			url:param.url,
			timeOfRead:new Date()
		}
		let isInHistory = false;
		if(this.newsHistory){
			for(let single of this.newsHistory){
				if(single.title == newsForHistory.title && single.source == newsForHistory.source){
					isInHistory = true;
				}
			}
			if(!isInHistory){
				newsForHistory.timeOfRead = new Date()
				this.newsHistory.push(newsForHistory);
				localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory.sort((a:any,b:any)=>{
					if(a.timeOfRead > b.timeOfRead){
						return -1;
					}else if(a.timeOfRead < b.timeOfRead){
						return 1;
					}else{
						return 0;
					}
				})));
			}
		}
	}
	/**
	 * 
	 * 
	 * @protected
	 * @returns 
	 * 
	 * @memberof HomeComponent
	 */
	protected getNewsHistory(){
		return JSON.parse(localStorage.getItem('newsHistory'));
	}
	/**
	 * 
	 * 
	 * @protected
	 * 
	 * @memberof HomeComponent
	 */
	protected checkIsNewsInLikedNews(){
		if(!localStorage.getItem('likedNews')){
			this.likedNews=[];
  		}else{
			  this.likedNews = this.getLikedNews()
		  }

	}
	protected addToLikedNews(param:any){
		let liked = {
			title:param.title,
			source:param.source,
			url:param.url,
			timeOfLike:new Date()
		}
		let isInLiked = false;
		if(this.likedNews){
			for(let single of this.likedNews){
				if(single.title == liked.title && single.source == liked.source){
					isInLiked = true;
				}
			}
			if(!isInLiked){		
				liked.timeOfLike = new Date()
				this.likedNews.push(liked);
				localStorage.setItem('likedNews', JSON.stringify(this.likedNews.sort((a:any,b:any)=>{
					if(a.timeOfLike > b.timeOfLike){
						return -1;
					}else if(a.timeOfLike < b.timeOfLike){
						return 1;
					}else{
						return 0;
					}
				})));
			}
		}
	}
	/**
	 * 
	 * 
	 * @protected
	 * @returns 
	 * 
	 * @memberof HomeComponent
	 */
	protected getLikedNews(){
		return JSON.parse(localStorage.getItem('likedNews'));
	}


	/**
	 * 
	 * 
	 * @param {*} param 
	 * 
	 * @memberof HomeComponent
	 */
	removeNewsFromHistory(param:any){
		this.newsHistory = this.newsHistory.filter(a=>a.timeOfRead != param.timeOfRead)
		localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory))
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof HomeComponent
	 */
	clearAllNewsFromHistory(){
		localStorage.removeItem('newsHistory');
		this.newsHistory = [];
	}
	/**
	 * 
	 * @param {*} param 
	 * 
	 * @memberof HomeComponent
	 */
	like(param:any){
		param.timeOfLike = new Date();
		param.liked = true
		this.addToLikedNews(param)
	}
	/**
	 * 
	 * @param {*} param 
	 * 
	 * @memberof HomeComponent
	 */
	unlike(param:any){

		param.liked = false
		this.likedNews = this.likedNews.filter(a=>a.title != param.title)
		console.log(param);
		localStorage.setItem('likedNews', JSON.stringify(this.likedNews));
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof HomeComponent
	 */
	clearAllNewsFromLikedNews(param:any){
		localStorage.removeItem('likedNews');
		this.likedNews = []
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof HomeComponent
	 */
	showSide(){
		if(this.showSideMenu == false){
			this.showSideMenu = true
		}else{
			this.showSideMenu = false;			
		}
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof HomeComponent
	 */
	hideSide(){
			this.showSideMenu = false;					
	}
}