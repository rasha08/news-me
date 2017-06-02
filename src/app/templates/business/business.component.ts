import { Component, OnInit } from '@angular/core';
import {News} from '../../clasess/news';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { WallStreetJournalDataService } from "../../services/business/wall-street-jurnal-data-service";

import { BusinessInsiderDataService } from "../../services/business/business-insider-data-service";
import { CNBCDataService } from "../../services/business/cnbc-data-service";
import { FortneDataService } from "../../services/business/fortune-data-service";
import { EconomistDataService } from "../../services/business/economist-data-service";

@Component({
	selector: 'app-business',
	moduleId:module.id,
	templateUrl:'business.component.html',
	styleUrls:['business.component.css']
})
export class BusinessComponent implements OnInit{
	errorMessage: string;
	news:Array<any>=[];
	allNews:Array<any>=[];
	selectedNews:any={};
	message:string;
	showSideMenu:boolean=false;
	newsHistory:Array<any>
	likedNews:Array<any>
	wallStreetJurnal:News[];
	businessInsider:News[];
	cnbc:News[];
	fortune:News[];
	economist:News[];
	mode = 'Observable';
	/**
	 * Creates an instance of BusinessComponent.
	 * @param {WallStreetJournalDataService} wallStreetJournalDataService 
	 * @param {BusinessInsiderDataService} businessInsiderDataService 
	 * @param {CNBCDataService} cnbcDataService 
	 * @param {FortneDataService} fortuneDataService 
	 * @param {EconomistDataService} economistDataService 
	 * 
	 * @memberof BusinessComponent
	 */
	constructor(private wallStreetJournalDataService:WallStreetJournalDataService, private businessInsiderDataService:BusinessInsiderDataService, private cnbcDataService:CNBCDataService, private fortuneDataService:FortneDataService, private economistDataService:EconomistDataService){

	}
	ngOnInit(){
		this.checkIsNewsInNewsHistory()
		this.checkIsNewsInLikedNews()
		this.getNews();
		this.fillNews()
	}
	getNews(){
		this.getWallStreetJurnalNews();
		this.getBusinessInsiderNews();
		this.getCNBCNews();
		this.getFortuneNews();
		this.getEconomistNews();
	}
	

	getWallStreetJurnalNews(){
		this.wallStreetJournalDataService.getNews().subscribe(
			news => {
				this.wallStreetJurnal =news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getBusinessInsiderNews(){
		this.businessInsiderDataService.getNews().subscribe(
			news => {
				this.businessInsider =news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}

	getCNBCNews(){
		this.cnbcDataService.getNews().subscribe(
			news => {
				this.cnbc =news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getFortuneNews(){
		this.fortuneDataService.getNews().subscribe(
			news => {
				this.fortune =news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	getEconomistNews(){
		this.economistDataService.getNews().subscribe(
			news => {
				this.economist =news;
				news.map(single => this.allNews.push(single));
				this.fillNews()
			},
			error => this.errorMessage = <any>error
		)
	}
	
	sideMenu:Array<any>=[
		{
			name : 'WALL STREET JURNAL',
			show : 'wallStreetJurnal'
		},
		{
			name : 'BUSINESS INSIDER',
			show : 'businessInsider'
		},
		{
			name : 'CNBC',
			show : 'cnbc'
		},
		{
			name : 'FORTUNE',
			show : 'fortune'
		},
		{
			name : 'ECONOMIST',
			show : 'economist'
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
