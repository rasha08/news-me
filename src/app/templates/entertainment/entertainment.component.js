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
var buzzfeed_data_service_1 = require("../../services/entertainment/buzzfeed-data-service");
var daily_mail_data_service_1 = require("../../services/entertainment/daily-mail-data-service");
var entertainment_weekly_data_service_1 = require("../../services/entertainment/entertainment-weekly-data-service");
var mashable_data_services_1 = require("../../services/entertainment/mashable-data-services");
var the_lad_bible_data_service_1 = require("../../services/entertainment/the-lad-bible-data-service");
var EntertainmentComponent = (function () {
    function EntertainmentComponent(buzzFeedDataService, dailyMailDataService, entertainmentWeeklyDataService, mashableDataService, theLadBibleDataService) {
        this.buzzFeedDataService = buzzFeedDataService;
        this.dailyMailDataService = dailyMailDataService;
        this.entertainmentWeeklyDataService = entertainmentWeeklyDataService;
        this.mashableDataService = mashableDataService;
        this.theLadBibleDataService = theLadBibleDataService;
        this.news = [];
        this.allNews = [];
        this.selectedNews = {};
        this.likedNews = [];
        this.sideMenu = [
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
            }
        ];
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
        this.checkIsNewsInNewsHistory();
        this.checkIsNewsInLikedNews();
        this.getNews();
        this.fillNews();
    };
    EntertainmentComponent.prototype.getNews = function () {
        this.getBuzzFeedNews();
        this.getDailyMailNews();
        this.getEntertainmentWeeklyNews();
        this.getMashableNews();
        this.getTheLadBibleNews();
    };
    EntertainmentComponent.prototype.getBuzzFeedNews = function () {
        var _this = this;
        this.buzzFeedDataService.getNews().subscribe(function (news) {
            _this.buzzFeedNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    EntertainmentComponent.prototype.getDailyMailNews = function () {
        var _this = this;
        this.dailyMailDataService.getNews().subscribe(function (news) {
            _this.dailyMailNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    EntertainmentComponent.prototype.getEntertainmentWeeklyNews = function () {
        var _this = this;
        this.entertainmentWeeklyDataService.getNews().subscribe(function (news) {
            _this.entertainmentWeekly = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    EntertainmentComponent.prototype.getMashableNews = function () {
        var _this = this;
        this.mashableDataService.getNews().subscribe(function (news) {
            _this.mashableNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    EntertainmentComponent.prototype.getTheLadBibleNews = function () {
        var _this = this;
        this.theLadBibleDataService.getNews().subscribe(function (news) {
            _this.theLadBibleNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
            _this.fillNews();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     * @param param
     */
    EntertainmentComponent.prototype.show = function (param) {
        this.news = this[param];
    };
    /**
     *
     *
     * @param {*} event
     *
     * @memberof SportComponent
     */
    EntertainmentComponent.prototype.search = function (event) {
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
    EntertainmentComponent.prototype.showBig = function (param) {
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
    EntertainmentComponent.prototype.fillNews = function () {
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
            if (single.title) {
                if (single.title.length > 70) {
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
    EntertainmentComponent.prototype.checkIsNewsInNewsHistory = function () {
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
    EntertainmentComponent.prototype.addToNewsHistory = function (param) {
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
    EntertainmentComponent.prototype.getNewsHistory = function () {
        return JSON.parse(localStorage.getItem('newsHistory'));
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    EntertainmentComponent.prototype.checkIsNewsInLikedNews = function () {
        if (!localStorage.getItem('likedNews')) {
            this.likedNews = [];
        }
        else {
            this.likedNews = this.getLikedNews();
        }
    };
    EntertainmentComponent.prototype.addToLikedNews = function (param) {
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
    EntertainmentComponent.prototype.getLikedNews = function () {
        return JSON.parse(localStorage.getItem('likedNews'));
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    EntertainmentComponent.prototype.removeNewsFromHistory = function (param) {
        this.newsHistory = this.newsHistory.filter(function (a) { return a.timeOfRead != param.timeOfRead; });
        localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    EntertainmentComponent.prototype.clearAllNewsFromHistory = function () {
        localStorage.removeItem('newsHistory');
        this.newsHistory = [];
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    EntertainmentComponent.prototype.like = function (param) {
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
    EntertainmentComponent.prototype.unlike = function (param) {
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
    EntertainmentComponent.prototype.clearAllNewsFromLikedNews = function (param) {
        localStorage.removeItem('likedNews');
        this.likedNews = [];
    };
    return EntertainmentComponent;
}());
EntertainmentComponent = __decorate([
    core_1.Component({
        selector: 'app-entertainment',
        moduleId: module.id,
        templateUrl: 'entertainment.component.html',
        styleUrls: ['entertainment.component.css']
    }),
    __metadata("design:paramtypes", [buzzfeed_data_service_1.BuzzFeedDataService, daily_mail_data_service_1.DailyMailDataService, entertainment_weekly_data_service_1.EntertainmentWeeklyDataService, mashable_data_services_1.MashableDataService, the_lad_bible_data_service_1.TheLadBibleDataService])
], EntertainmentComponent);
exports.EntertainmentComponent = EntertainmentComponent;
//# sourceMappingURL=entertainment.component.js.map