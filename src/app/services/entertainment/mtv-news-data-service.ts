import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {News} from '../../clasess/news';

@Injectable()
export class MTVNewsDataService{
	private newsUrl='https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=95c08816047f42318fcdc05ddc1a17c5';

	constructor(private http:Http){

	}
	
	getNews():Observable<News[]>{
		return this.http.get(this.newsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res:Response){
		let response = res.json();
		let newsArray = [];
		let articles = response.articles;
		for(let news of articles){
			newsArray.push(new News(news.author,news.title,news.description,news.url,news.urlToImage,news.publishedAt,'MTV NEWS'));
		}
		return newsArray || {};
	}

	private handleError(error:Response | any){
		let errMsg:string;
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		}else{
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);
		return Observable.throw(errMsg);
	}
}