import { Component, OnInit} from '@angular/core';
import {News} from '../../clasess/news';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BBCDataService} from '../../services/general/bbc-data-service';
import {ABCDataService} from '../../services/general/abc-data-service';
import {CNNDataService} from '../../services/general/cnn-data-service';
import {GuardianUKDataService} from '../../services/general/guardian-uk-data-service';
import {APDataService} from '../../services/general/ap-data-service';
import {WPDataService} from '../../services/general/wp-data-service';
import {NTDataService} from '../../services/general/nt-data-service';
import {GoogleNewsDataService} from '../../services/general/google-news-data-service';
import {AlJazeeraDataService} from '../../services/general/al-jazeera-data-service';
import {IndependentDataService} from '../../services/general/independent-data-service';
import {USATodayDataService} from '../../services/general/usa-today-data-service';
import {TimeDataService} from '../../services/general/time-data-service';
import {TelegraphDataService} from '../../services/general/telegraph-data-service';
import {NewsweekDataService} from '../../services/general/newsweek-data-service';
/**
 *
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
	selector:'app-home',
	moduleId:module.id,
	templateUrl:'home.component.html',
	styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  url:string;
  news:Array<any>=[];
  allNews:Array<any>=[]
  selectedNews:any={};
  newsHistory:Array<any>
  likedNews:Array<any>=[]
  showSideMenu:Boolean=false;
  message:string;  
  bbcNews:News[];
  abcNews:News[];
  cnnNews:News[];
  guardianUkNews:News[];
  apNews:News[];
  wpNews:News[];
  ntNews:News[];
  gnNews:News[];
  alJazeeraNews:News[];
  independentNews:News[];
  usaTodayNews:News[];
  timeNews:News[];
  telegraphNews:News[];
  newsweekNews:News[];

  mode = 'Observable';
  /**
   * Creates an instance of HomeComponent.
   * @param {BBCDataService} bbcDataService
   * @param {ABCDataService} abcDataService
   * @param {CNNDataService} cnnDataService
   * @param {GuardianUKDataService} guardianUkDataService
   * @param {APDataService} apDataService
   * @param {WPDataService} wpDataService
   * @param {NTDataService} ntDataService
   * @param {GoogleNewsDataService} gnDataService
   * @param {AlJazeeraDataService} alJazeeraDataSrevice
   * @param {IndependentDataService} independentDataService
   * @param {USATodayDataService} usaTodayDataService
   * @param {TimeDataService} timeDataservice
   * @param {TelegraphDataService} telegraphDataservice
   * @param {NewsweekDataService} newsweekDataService
   *
   * @memberOf HomeComponent
   */
	constructor(private bbcDataService:BBCDataService, private abcDataService:ABCDataService, private cnnDataService:CNNDataService, private guardianUkDataService:GuardianUKDataService,private apDataService:APDataService,private wpDataService:WPDataService,private ntDataService:NTDataService, private gnDataService:GoogleNewsDataService,private alJazeeraDataSrevice:AlJazeeraDataService, private independentDataService:IndependentDataService, private usaTodayDataService:USATodayDataService, private timeDataservice:TimeDataService, private telegraphDataservice:TelegraphDataService, private newsweekDataService:NewsweekDataService){
	}
	ngOnInit() {
		this.checkIsNewsInNewsHistory()
		this.checkIsNewsInLikedNews()
		this.getNews();
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getNews(){
		this.getBBCNews();
		this.getABCNews();
		this.getCNNNews();
		this.getGuardianUkNews();
		this.getAPNews();
		this.getWPNews();
		this.getNTNews();
		this.getGNNews();
		this.getAlJazeeraNews();
		this.getindependentNews();
		this.getUSATodayNews();
		this.getTimeNews();
		this.getTelegraphNews();
		this.getNewsweekNews();
		
	}

	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getBBCNews() {
		this.bbcDataService.getNews().subscribe(
						news => {
							this.bbcNews = news;
							news.map(single => this.allNews.push(single));
						},
						error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getABCNews(){
		this.abcDataService.getNews().subscribe(
								news => {
									this.abcNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getCNNNews(){
		this.cnnDataService.getNews().subscribe(
								news => {
									this.cnnNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getGuardianUkNews(){
		this.guardianUkDataService.getNews().subscribe(
								news => {
									this.guardianUkNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getAPNews(){
		this.apDataService.getNews().subscribe(
								news => {
									this.apNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getWPNews(){
		this.wpDataService.getNews().subscribe(
								news => {
									this.wpNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getNTNews(){
		this.ntDataService.getNews().subscribe(
								news => {
									this.ntNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getGNNews(){
		this.gnDataService.getNews().subscribe(
								news => {
									this.gnNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getAlJazeeraNews(){
		this.alJazeeraDataSrevice.getNews().subscribe(
								news => {
									this.alJazeeraNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getindependentNews(){
		this.independentDataService.getNews().subscribe(
								news => {
									this.independentNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getUSATodayNews(){
		this.usaTodayDataService.getNews().subscribe(
								news => {
									this.usaTodayNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getTimeNews(){
		this.timeDataservice.getNews().subscribe(
								news => {
									this.timeNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getTelegraphNews(){
		this.telegraphDataservice.getNews().subscribe(
								news => {
									this.telegraphNews = news;
									news.map(single => this.allNews.push(single));
								},
								error =>  this.errorMessage = <any>error);
	}
	/**
	 *
	 *
	 *
	 * @memberOf HomeComponent
	 */
	getNewsweekNews(){
		this.newsweekDataService.getNews().subscribe(
								news => {
									this.newsweekNews = news;
									news.map(single => this.allNews.push(single));
									this.fillNews();
								},
								error =>  this.errorMessage = <any>error);
	}

	sideMenu:Array<any>=[
		{
			name: 'BBC NEWS',
			show: 'bbcNews'
		},
		{
			name: 'CNN NEWS',
			show: 'cnnNews'
		},
		{
			name: 'ABC NEWS',
			show: 'abcNews'
		},
		{
			name: 'GUARDIAN UK',
			show: 'guardianUkNews'
		},
		{
			name: 'ASSOCIATED PRESS',
			show: 'apNews'
		},
		{
			name: 'WASHINGTON POST',
			show: 'wpNews'
		},
		{
			name: 'NEW YORK TIMES',
			show: 'ntNews'
		},
		{
			name: 'GOOGLE NEWS',
			show: 'gnNews'
		},
		{
			name: 'AL JAZEERA',
			show: 'alJazeeraNews'
		},
		{
			name: 'INDEPENDENT',
			show: 'independentNews'
		},
		{
			name: 'USA TODAY',
			show: 'usaTodayNews'
		},
		{
			name:'TIME MAGAZINE',
			show: 'timeNews'
		},
		{
			name:'TELEGRAPH',
			show: 'telegraphNews'
		},
		{
			name:'NEWSWEEK',
			show: 'newsweekNews'
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
										if(single.description.length>200){
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

