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
require("rxjs/add/operator/map");
var tech_crunch_data_service_1 = require("../../services/technology/tech-crunch-data-service");
var engadget_data_service_1 = require("../../services/technology/engadget-data-service");
var hacker_news_data_service_1 = require("../../services/technology/hacker-news-data-service");
var recode_data_service_1 = require("../../services/technology/recode-data-service");
var techradar_data_service_1 = require("../../services/technology/techradar-data-service");
var next_web_data_service_1 = require("../../services/technology/next-web-data-service");
var verge_data_service_1 = require("../../services/technology/verge-data-service");
var TechnologyComponent = (function () {
    function TechnologyComponent(techCrunchDataService, engadgetDataService, hackerNewsDataService, recodeDataService, techRadarDataService, theNextWebDataService, theVergeDataService) {
        this.techCrunchDataService = techCrunchDataService;
        this.engadgetDataService = engadgetDataService;
        this.hackerNewsDataService = hackerNewsDataService;
        this.recodeDataService = recodeDataService;
        this.techRadarDataService = techRadarDataService;
        this.theNextWebDataService = theNextWebDataService;
        this.theVergeDataService = theVergeDataService;
        this.news = [];
        this.allNews = [];
        this.selectedNews = {};
        this.likedNews = [];
        this.sideMenu = [
            {
                name: 'TECHCRUNCH',
                show: 'techCrunch'
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
        ];
    }
    TechnologyComponent.prototype.ngOnInit = function () {
        this.checkIsNewsInNewsHistory();
        this.checkIsNewsInLikedNews();
        this.getNews();
        this.fillNews();
    };
    TechnologyComponent.prototype.getNews = function () {
        this.getTechCrunchNews();
        this.getEngadgetNews();
        this.getHackerNews();
        this.getRecodeNews();
        this.getTechRadarNews();
        this.getNextWebNews();
        this.getVergeNews();
    };
    TechnologyComponent.prototype.getTechCrunchNews = function () {
        var _this = this;
        this.techCrunchDataService.getNews().subscribe(function (news) {
            _this.techCrunch = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getEngadgetNews = function () {
        var _this = this;
        this.engadgetDataService.getNews().subscribe(function (news) {
            _this.engadget = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getHackerNews = function () {
        var _this = this;
        this.hackerNewsDataService.getNews().subscribe(function (news) {
            _this.hackerNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getRecodeNews = function () {
        var _this = this;
        this.recodeDataService.getNews().subscribe(function (news) {
            _this.recode = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getTechRadarNews = function () {
        var _this = this;
        this.techRadarDataService.getNews().subscribe(function (news) {
            _this.techRadar = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getNextWebNews = function () {
        var _this = this;
        this.theNextWebDataService.getNews().subscribe(function (news) {
            _this.nextWeb = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    TechnologyComponent.prototype.getVergeNews = function () {
        var _this = this;
        this.theVergeDataService.getNews().subscribe(function (news) {
            _this.verge = news;
            news.map(function (single) { return _this.allNews.push(single); });
            _this.fillNews();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     * @param param
     */
    TechnologyComponent.prototype.show = function (param) {
        this.news = this[param];
    };
    /**
     *
     *
     * @param {*} event
     *
     * @memberof SportComponent
     */
    TechnologyComponent.prototype.search = function (event) {
        this.message = ' Sorry, we did not find any news matching your search. Please try again, or browse all news...';
        if (event.target.value) {
            this.news = this.allNews.filter(function (single) {
                return (single.title + " " + single.description).toLowerCase().indexOf(event.target.value.toLowerCase()) != -1;
            });
        }
        else {
            this.fillNews();
        }
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.showBig = function (param) {
        this.selectedNews = param;
        param.isRead = true;
        this.addToNewsHistory(param);
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.fillNews = function () {
        //Checking News History//
        if (this.getNewsHistory()) {
            var readNews = this.getNewsHistory();
            for (var _i = 0, _a = this.allNews; _i < _a.length; _i++) {
                var single = _a[_i];
                for (var _b = 0, readNews_1 = readNews; _b < readNews_1.length; _b++) {
                    var readnews = readNews_1[_b];
                    if (single.title === readnews.title && single.source === readnews.source) {
                        single.isRead = true;
                    }
                }
            }
        }
        //Checking Liked News//
        if (this.getLikedNews()) {
            var liked = this.getLikedNews();
            for (var _c = 0, _d = this.allNews; _c < _d.length; _c++) {
                var single = _d[_c];
                for (var _e = 0, liked_1 = liked; _e < liked_1.length; _e++) {
                    var like = liked_1[_e];
                    if (single.title === like.title && single.source === like.source) {
                        single.liked = true;
                    }
                }
            }
        }
        this.news = this.allNews
            .filter(function (single) {
            if (single.description) {
                if (single.description.length > 150) {
                    return true;
                }
            }
            else {
                return false;
            }
        })
            .sort(function (a, b) {
            if (a.title[0] > b.title[0]) {
                return 1;
            }
            else if (a.title[0] < b.title[0]) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.checkIsNewsInNewsHistory = function () {
        if (!localStorage.getItem('newsHistory')) {
            this.newsHistory = [];
        }
        else {
            this.newsHistory = this.getNewsHistory();
        }
    };
    /**
     *
     *
     * @protected
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.addToNewsHistory = function (param) {
        var newsForHistory = {
            title: param.title,
            source: param.source,
            url: param.url,
            timeOfRead: new Date()
        };
        var isInHistory = false;
        if (this.newsHistory) {
            for (var _i = 0, _a = this.newsHistory; _i < _a.length; _i++) {
                var single = _a[_i];
                if (single.title == newsForHistory.title && single.source == newsForHistory.source) {
                    isInHistory = true;
                }
            }
            if (!isInHistory) {
                newsForHistory.timeOfRead = new Date();
                this.newsHistory.push(newsForHistory);
                localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory.sort(function (a, b) {
                    if (a.timeOfRead > b.timeOfRead) {
                        return -1;
                    }
                    else if (a.timeOfRead < b.timeOfRead) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                })));
            }
        }
    };
    /**
     *
     *
     * @protected
     * @returns
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.getNewsHistory = function () {
        return JSON.parse(localStorage.getItem('newsHistory'));
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.checkIsNewsInLikedNews = function () {
        if (!localStorage.getItem('likedNews')) {
            this.likedNews = [];
        }
        else {
            this.likedNews = this.getLikedNews();
        }
    };
    TechnologyComponent.prototype.addToLikedNews = function (param) {
        var liked = {
            title: param.title,
            source: param.source,
            url: param.url,
            timeOfLike: new Date()
        };
        var isInLiked = false;
        if (this.likedNews) {
            for (var _i = 0, _a = this.likedNews; _i < _a.length; _i++) {
                var single = _a[_i];
                if (single.title == liked.title && single.source == liked.source) {
                    isInLiked = true;
                }
            }
            if (!isInLiked) {
                liked.timeOfLike = new Date();
                this.likedNews.push(liked);
                localStorage.setItem('likedNews', JSON.stringify(this.likedNews.sort(function (a, b) {
                    if (a.timeOfLike > b.timeOfLike) {
                        return -1;
                    }
                    else if (a.timeOfLike < b.timeOfLike) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                })));
            }
        }
    };
    /**
     *
     *
     * @protected
     * @returns
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.getLikedNews = function () {
        return JSON.parse(localStorage.getItem('likedNews'));
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.removeNewsFromHistory = function (param) {
        this.newsHistory = this.newsHistory.filter(function (a) { return a.timeOfRead != param.timeOfRead; });
        localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.clearAllNewsFromHistory = function () {
        localStorage.removeItem('newsHistory');
        this.newsHistory = [];
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.like = function (param) {
        param.timeOfLike = new Date();
        param.liked = true;
        this.addToLikedNews(param);
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.unlike = function (param) {
        param.liked = false;
        this.likedNews = this.likedNews.filter(function (a) { return a.title != param.title; });
        console.log(param);
        localStorage.setItem('likedNews', JSON.stringify(this.likedNews));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    TechnologyComponent.prototype.clearAllNewsFromLikedNews = function (param) {
        localStorage.removeItem('likedNews');
        this.likedNews = [];
    };
    return TechnologyComponent;
}());
TechnologyComponent = __decorate([
    core_1.Component({
        selector: 'app-technology',
        moduleId: module.id,
        templateUrl: 'technology.component.html',
        styleUrls: ['technology.component.css']
    }),
    __metadata("design:paramtypes", [tech_crunch_data_service_1.TechCrunchDataService,
        engadget_data_service_1.EngadgetDataService,
        hacker_news_data_service_1.HackerNewsDataService,
        recode_data_service_1.RecodeDataService,
        techradar_data_service_1.TechRadarDataService,
        next_web_data_service_1.TheNextWebDataService,
        verge_data_service_1.TheVergeDataService])
], TechnologyComponent);
exports.TechnologyComponent = TechnologyComponent;
//# sourceMappingURL=technology.component.js.map