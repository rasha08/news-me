"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var news_1 = require("../clasess/news");
/**
 *
 *
 * @export
 * @class IndependentDataService
 */
var IndependentDataService = (function () {
    function IndependentDataService(http) {
        this.http = http;
        this.newsUrl = 'https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=95c08816047f42318fcdc05ddc1a17c5';
    }
    /**
     *
     *
     * @returns {Observable<News[]>}
     *
     * @memberOf IndependentDataService
     */
    IndependentDataService.prototype.getNews = function () {
        return this.http.get(this.newsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     *
     * @private
     * @param {Response} res
     * @returns
     *
     * @memberOf IndependentDataService
     */
    IndependentDataService.prototype.extractData = function (res) {
        var newsArray = [];
        var body = JSON.parse(res._body);
        for (var _i = 0, _a = body.articles; _i < _a.length; _i++) {
            var news = _a[_i];
            newsArray.push(new news_1.News(news.author, news.title, news.description, news.url, news.urlToImage, news.publishedAt, 'Independent'));
        }
        return newsArray || {};
    };
    /**
     *
     *
     * @private
     * @param {(Response | any)} error
     * @returns
     *
     * @memberOf IndependentDataService
     */
    IndependentDataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return IndependentDataService;
}());
IndependentDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IndependentDataService);
exports.IndependentDataService = IndependentDataService;
//# sourceMappingURL=independent-data-service.js.map