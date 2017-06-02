import { Component, OnInit} from '@angular/core';
import {News} from '../../clasess/news';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { SportsBibleDataService} from "../../services/sport/sport-bible-data-service";
import { TalkSportDataService } from "../../services/sport/talksport-data-service";
import { NFLDataService } from "../../services/sport/nfl-data-service";
import { FoxSportDataService } from '../../services/sport/fox-sport-data-service';
import { FourFourTwoDataService } from "../../services/sport/fourfourtwo-data-service";
import { FootballItaliaDataService } from "../../services/sport/football-italia-data-service";
import { ESPNDataService } from '../../services/sport/espn-data-service';
import { BBCSportDataService } from '../../services/sport/bbc-sport-data-service';


/**
 *
 *
 * @export
 * @class SportComponent
 * @implements {OnInit}
 */
@Component({
	selector: 'app-sport',
	moduleId:module.id,
	templateUrl: 'sport.component.html',
	styleUrls: ['sport.component.css']
})
export class SportComponent implements OnInit{
	errorMessage: string;
  	news:News[]=[];
	allNews:Array<any>=[]
  	selectedNews:any={};
  	newsHistory:Array<any>
  	likedNews:Array<any>=[]
  	message:string;
	showSideMenu:boolean=false;  	
	sportBible:News[];
	talkSport:News[];
	nfl:News[];
	foxSport:News[];
	fourFourTwo:News[];
	footballItalia:News[];
	espn:News[];
	bbcSport:News[];
	/**
	 * Creates an instance of SportComponent.
	 * @param {SportsBibleDataService} sportsBibleDataService
	 * @param {TalkSportDataService} talkSportDataService
	 * @param {NFLDataService} nflDataService
	 * @param {FoxSportDataService} foxSportDataService
	 * @param {FourFourTwoDataService} fourFourTwoDataService
	 * @param {FootballItaliaDataService} footballItaliaDataService
	 * @param {ESPNDataService} espnDataService
	 * @param {BBCSportDataService} bbcSportDataService
	 *
	 * @memberof SportComponent
	 */
	constructor(private sportsBibleDataService:SportsBibleDataService, private talkSportDataService:TalkSportDataService, private nflDataService:NFLDataService, private foxSportDataService:FoxSportDataService, private fourFourTwoDataService:FourFourTwoDataService, private footballItaliaDataService:FootballItaliaDataService, private espnDataService:ESPNDataService, private bbcSportDataService:BBCSportDataService){
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	ngOnInit(){
		this.checkIsNewsInNewsHistory()
		this.checkIsNewsInLikedNews()
		this.getNews();
		this.fillNews();
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getNews(){
		this.getSportBibleNews();
		this.getTalkSportNews();
		this.getNFLNews();
		this.getFoxSportNews();
		this.getFourFourTwoNews();
		this.getFootballItaliaNews();
		this.getEspnNews();
		this.getBbcSportNews()
	}

	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getSportBibleNews(){
		this.sportsBibleDataService.getNews().subscribe(
			news =>	{
				this.sportBible = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getTalkSportNews(){
		this.talkSportDataService.getNews().subscribe(
			news => {
				this.talkSport = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getNFLNews(){
		this.nflDataService.getNews().subscribe(
			news => {
				this.nfl = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getFoxSportNews(){
		this.foxSportDataService.getNews().subscribe(
			news => {
				this.foxSport = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getFourFourTwoNews(){
		this.fourFourTwoDataService.getNews().subscribe(
			news => {
				this.fourFourTwo = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getFootballItaliaNews(){
		this.footballItaliaDataService.getNews().subscribe(
			news => {
				this.footballItalia = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getEspnNews(){
		this.espnDataService.getNews().subscribe(
			news => {
				this.espn = news;
				news.map(single => this.allNews.push(single));
			},
			error => this.errorMessage = <any>error
		)
	}
	/**
	 *
	 *
	 *
	 * @memberof SportComponent
	 */
	getBbcSportNews(){
		this.bbcSportDataService.getNews().subscribe(
			news => {
				this.bbcSport = news;
				news.map(single => this.allNews.push(single));
				this.fillNews()
			},
			error => this.errorMessage = <any>error
		)
	}/**
	 *
	 *
	 * @type {Array<any>}
	 * @memberof SportComponent
	 */
	sideMenu:Array<any> = [
		{
			name: 'TALKSPORT',
			show: 'talkSport'
		},
		{
			name: 'FOX SPORT',
			show: 'foxSport'
		},
		{
			name: 'THE SPORT BIBLE',
			show: 'sportBible'
		},
		{
			name: 'NFL NEWS',
			show: 'nfl'
		},
		{
			name: 'FOUR-FOUR-TWO',
			show: 'fourFourTwo'
		},
		{
			name: 'FOOTBAL ITALIA',
			show: 'footballItalia'
		},
		{
			name: 'ESPN',
			show: 'espn'
		},
		{
			name: 'BBC SPORT',
			show: 'bbcSport'
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
