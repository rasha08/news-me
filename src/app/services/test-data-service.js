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
var TestDataService = (function () {
    function TestDataService(http) {
        this.http = http;
        this.newsUrl = 'http://talksport.com/football/arsenal-fc-transfer-news-real-madrid-striker-alvaro-morata-targeted-club-record-ps50million';
    }
    TestDataService.prototype.getNews = function () {
        return this.http.get(this.newsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TestDataService.prototype.extractData = function (res) {
        var response = res.json();
        var newsArray = [];
        newsArray.push(response);
        return newsArray || [];
    };
    TestDataService.prototype.handleError = function (error) {
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
    return TestDataService;
}());
TestDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TestDataService);
exports.TestDataService = TestDataService;
//# sourceMappingURL=test-data-service.js.map