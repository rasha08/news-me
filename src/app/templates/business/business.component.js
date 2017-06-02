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
var wall_street_jurnal_data_service_1 = require("../../services/business/wall-street-jurnal-data-service");
var business_insider_data_service_1 = require("../../services/business/business-insider-data-service");
var cnbc_data_service_1 = require("../../services/business/cnbc-data-service");
var fortune_data_service_1 = require("../../services/business/fortune-data-service");
var economist_data_service_1 = require("../../services/business/economist-data-service");
var BusinessComponent = (function () {
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
    function BusinessComponent(wallStreetJournalDataService, businessInsiderDataService, cnbcDataService, fortuneDataService, economistDataService) {
        this.wallStreetJournalDataService = wallStreetJournalDataService;
        this.businessInsiderDataService = businessInsiderDataService;
        this.cnbcDataService = cnbcDataService;
        this.fortuneDataService = fortuneDataService;
        this.economistDataService = economistDataService;
        this.news = [];
        this.allNews = [];
        this.selectedNews = {};
        this.mode = 'Observable';
        this.sideMenu = [
            {
                name: 'WALL STREET JURNAL',
                show: 'wallStreetJurnal'
            },
            {
                name: 'BUSINESS INSIDER',
                show: 'businessInsider'
            },
            {
                name: 'CNBC',
                show: 'cnbc'
            },
            {
                name: 'FORTUNE',
                show: 'fortune'
            },
            {
                name: 'ECONOMIST',
                show: 'economist'
            }
        ];
    }
    BusinessComponent.prototype.ngOnInit = function () {
        this.checkIsNewsInNewsHistory();
        this.checkIsNewsInLikedNews();
        this.getNews();
        this.fillNews();
    };
    BusinessComponent.prototype.getNews = function () {
        this.getWallStreetJurnalNews();
        this.getBusinessInsiderNews();
        this.getCNBCNews();
        this.getFortuneNews();
        this.getEconomistNews();
    };
    BusinessComponent.prototype.getWallStreetJurnalNews = function () {
        var _this = this;
        this.wallStreetJournalDataService.getNews().subscribe(function (news) {
            _this.wallStreetJurnal = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    BusinessComponent.prototype.getBusinessInsiderNews = function () {
        var _this = this;
        this.businessInsiderDataService.getNews().subscribe(function (news) {
            _this.businessInsider = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    BusinessComponent.prototype.getCNBCNews = function () {
        var _this = this;
        this.cnbcDataService.getNews().subscribe(function (news) {
            _this.cnbc = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    BusinessComponent.prototype.getFortuneNews = function () {
        var _this = this;
        this.fortuneDataService.getNews().subscribe(function (news) {
            _this.fortune = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    BusinessComponent.prototype.getEconomistNews = function () {
        var _this = this;
        this.economistDataService.getNews().subscribe(function (news) {
            _this.economist = news;
            news.map(function (single) { return _this.allNews.push(single); });
            _this.fillNews();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
 *
 * @param param
 */
    BusinessComponent.prototype.show = function (param) {
        this.news = this[param];
    };
    /**
     *
     *
     * @param {*} event
     *
     * @memberof SportComponent
     */
    BusinessComponent.prototype.search = function (event) {
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
    BusinessComponent.prototype.showBig = function (param) {
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
    BusinessComponent.prototype.fillNews = function () {
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
                if (single.title.length > 80) {
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
    BusinessComponent.prototype.checkIsNewsInNewsHistory = function () {
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
    BusinessComponent.prototype.addToNewsHistory = function (param) {
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
    BusinessComponent.prototype.getNewsHistory = function () {
        return JSON.parse(localStorage.getItem('newsHistory'));
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    BusinessComponent.prototype.checkIsNewsInLikedNews = function () {
        if (!localStorage.getItem('likedNews')) {
            this.likedNews = [];
        }
        else {
            this.likedNews = this.getLikedNews();
        }
    };
    BusinessComponent.prototype.addToLikedNews = function (param) {
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
    BusinessComponent.prototype.getLikedNews = function () {
        return JSON.parse(localStorage.getItem('likedNews'));
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    BusinessComponent.prototype.removeNewsFromHistory = function (param) {
        this.newsHistory = this.newsHistory.filter(function (a) { return a.timeOfRead != param.timeOfRead; });
        localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    BusinessComponent.prototype.clearAllNewsFromHistory = function () {
        localStorage.removeItem('newsHistory');
        this.newsHistory = [];
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    BusinessComponent.prototype.like = function (param) {
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
    BusinessComponent.prototype.unlike = function (param) {
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
    BusinessComponent.prototype.clearAllNewsFromLikedNews = function (param) {
        localStorage.removeItem('likedNews');
        this.likedNews = [];
    };
    return BusinessComponent;
}());
BusinessComponent = __decorate([
    core_1.Component({
        selector: 'app-business',
        moduleId: module.id,
        templateUrl: 'business.component.html',
        styleUrls: ['business.component.css']
    }),
    __metadata("design:paramtypes", [wall_street_jurnal_data_service_1.WallStreetJournalDataService, business_insider_data_service_1.BusinessInsiderDataService, cnbc_data_service_1.CNBCDataService, fortune_data_service_1.FortneDataService, economist_data_service_1.EconomistDataService])
], BusinessComponent);
exports.BusinessComponent = BusinessComponent;
//# sourceMappingURL=business.component.js.map