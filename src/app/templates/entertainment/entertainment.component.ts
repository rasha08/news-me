import { Component, OnInit} from '@angular/core';
import { News } from '../../clasess/news';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BuzzFeedDataService } from "../../services/entertainment/buzzfeed-data-service";
import { DailyMailDataService } from "../../services/entertainment/daily-mail-data-service";
import { EntertainmentWeeklyDataService } from "../../services/entertainment/entertainment-weekly-data-service";
import { MashableDataService } from "../../services/entertainment/mashable-data-services";
import { TheLadBibleDataService } from "../../services/entertainment/the-lad-bible-data-service";
import { MTVNewsDataService } from "../../services/entertainment/mtv-news-data-service";
@Component({
	selector: 'app-entertainment',
	moduleId:module.id,
	templateUrl:'entertainment.component.html',
	styleUrls:['entertainment.component.css']
})

export class EntertainmentComponent implements OnInit{
	errorMessage: string;
	url:string;
	news:Array<any>=[];
	allNews:Array<any>=[]
	selectedNews:any={};
	newsHistory:Array<any>
	likedNews:Array<any>=[]
	message:string;
	showSideMenu:boolean=false;
	buzzFeedNews:News[];
	dailyMailNews:News[];
	entertainmentWeekly:News[];
	mashableNews:News[];
	theLadBibleNews:News[];
	mtvNews:News[]

	constructor( private buzzFeedDataService:BuzzFeedDataService, private dailyMailDataService:DailyMailDataService, private entertainmentWeeklyDataService:EntertainmentWeeklyDataService, private mashableDataService:MashableDataService, private theLadBibleDataService:TheLadBibleDataService,private mtvNewsDataService:MTVNewsDataService ){

	}

	ngOnInit(){
		this.checkIsNewsInNewsHistory()
		this.checkIsNewsInLikedNews()
		this.getNews();
		this.fillNews()
	}

	getNews(){
		this.getBuzzFeedNews();
		this.getDailyMailNews();
		this.getEntertainmentWeeklyNews();
		this.getMashableNews();
		this.getTheLadBibleNews();
		this.getMtvNews()
	}

	getBuzzFeedNews(){
		this.buzzFeedDataService.getNews().subscribe(
										news => {
											this.buzzFeedNews = news;
											news.map(single => this.allNews.push(single));
										},
										error => this.errorMessage = <any>error)
	}

	getDailyMailNews(){
		this.dailyMailDataService.getNews().subscribe(
										news => {
											this.dailyMailNews = news;
											news.map(single => this.allNews.push(single));
										},
										error => this.errorMessage = <any>error)
	}

	getEntertainmentWeeklyNews(){
		this.entertainmentWeeklyDataService.getNews().subscribe(
										news => {
											this.entertainmentWeekly = news;
											news.map(single => this.allNews.push(single));
										},
										error => this.errorMessage = <any>error)
	}
	getMashableNews(){
		this.mashableDataService.getNews().subscribe(
										news => {
											this.mashableNews = news;
											news.map(single => this.allNews.push(single));
										},
										error => this.errorMessage = <any>error)
	}

	getTheLadBibleNews(){
		this.theLadBibleDataService.getNews().subscribe(
										news => {
											this.theLadBibleNews = news;
											news.map(single => this.allNews.push(single));
											this.fillNews();
										},
										error => this.errorMessage = <any>error)
	}
	getMtvNews(){
		this.mtvNewsDataService.getNews().subscribe(
										news => {
											this.mtvNews = news;
											news.map(single => this.allNews.push(single));
											this.fillNews();
										},
										error => this.errorMessage = <any>error)
	}
	sideMenu:Array<any>=[
		{
			name: 'BuzzFeed',
			show: 'buzzFeedNews'
		},
		{
			name: 'Daily Mail',
			show: 'dailyMailNews'
		},
		{
			name: 'Entertainment Weekly',
			show: 'entertainmentWeekly'
		},
		{
			name: 'Mashable',
			show: 'mashableNews'
		},
		{
			name: 'The Lad Bible',
			show: 'theLadBibleNews'
		},
		{
			name: 'MTV News',
			show: 'mtvNews'
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
									if(single.title){
										if(single.title.length>80){
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