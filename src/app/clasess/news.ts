export class News{
	_author:string;
	_title:string;
	_description:string;
	_url:string;
	_urlToImage:string;
	_publishedAt:any;
	_source:string;
	_isRead:boolean;
	_liked:boolean;
	_timeOflike:Date;

	constructor(author:string,title:string, description:string, url:string, urlToImage:string, publushedAt:string, source:string){
		this.author = author;
		this.title = title;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;			
		this.publishedAt = publushedAt;
		this.source = source;
		this.isRead = false;
		this.liked = false;
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set author(author:string){
		if(typeof author === 'string' && author.length > 0){
			this._author = author;			
		}else{
			this._author = 'News Source Not Available'
		}
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set title(title:string){
		if(typeof title === 'string' && title.length > 0){
			this._title = title;			
		}else{
			this._title = 'News Title Not Available'
		}
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set description(description:string){
		if(typeof description === 'string' && description.length > 0){
			this._description = description;			
		}else{
			this._description = this.title;
		}
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set url(url:string){
		if(typeof url === 'string' && url.length > 0){
			this._url = url;			
		}else{
			this._url = '';
		}
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set urlToImage(urlToImage){
		if(!urlToImage){
			this._urlToImage = 'http://advancedsolutionsonline.net/wp-content/uploads/2013/05/business-news.png'
		}else{
			this._urlToImage = urlToImage;			
		}
	}
	/**
	 * 
	 * 
	 * @param {string}
	 * @memberof News
	 */
	set publishedAt(publishedAt){
		if(!publishedAt){
			this._publishedAt = new Date();
		}else{
			this._publishedAt = new Date(publishedAt);			
		}
	}
	/**
	 * 
	 * 
	 * @param {strinng}
	 * @memberOf News
	 */
	set source(source:string){
		if(!source){
			this._source = 'News Source';
		}else{
			this._source = source;			
		}
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof News
	 */
	set isRead(param:boolean){
		this._isRead = param
	}
	/**
	 * 
	 * 
	 * @memberof News
	 */
	set liked(param:boolean){
		this._liked = param;
	}
	/**
	 * 
	 * 
	 * 
	 * @memberof News
	 */
	set timeOflike(date:any){
		date = new Date();
		this._timeOflike = date;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get source(){
		return this._source;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get author(){
		return this._author;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get title(){
		return this._title;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get description(){
		return this._description;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get url(){
		return this._url
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get urlToImage(){
		return this._urlToImage;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberOf News
	 */
	get publishedAt(){
		return this._publishedAt;
	}
	/**
	 * 
	 * 
	 * @readonly
	 * 
	 * @memberof News
	 */
	get isRead(){
		return this._isRead;
	}
	/**
	 * 
	 * @readonly
	 * 
	 * @memberof News
	 */
	get liked(){
		return this._liked
	}
	get timeOflike(){
		return this._timeOflike;
	}
}