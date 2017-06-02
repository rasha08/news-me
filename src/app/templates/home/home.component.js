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
require("rxjs/add/operator/map");
var bbc_data_service_1 = require("../../services/general/bbc-data-service");
var abc_data_service_1 = require("../../services/general/abc-data-service");
var cnn_data_service_1 = require("../../services/general/cnn-data-service");
var guardian_uk_data_service_1 = require("../../services/general/guardian-uk-data-service");
var ap_data_service_1 = require("../../services/general/ap-data-service");
var wp_data_service_1 = require("../../services/general/wp-data-service");
var nt_data_service_1 = require("../../services/general/nt-data-service");
var google_news_data_service_1 = require("../../services/general/google-news-data-service");
var al_jazeera_data_service_1 = require("../../services/general/al-jazeera-data-service");
var independent_data_service_1 = require("../../services/general/independent-data-service");
var usa_today_data_service_1 = require("../../services/general/usa-today-data-service");
var time_data_service_1 = require("../../services/general/time-data-service");
var telegraph_data_service_1 = require("../../services/general/telegraph-data-service");
var newsweek_data_service_1 = require("../../services/general/newsweek-data-service");
/**
 *
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
var HomeComponent = (function () {
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
    function HomeComponent(bbcDataService, abcDataService, cnnDataService, guardianUkDataService, apDataService, wpDataService, ntDataService, gnDataService, alJazeeraDataSrevice, independentDataService, usaTodayDataService, timeDataservice, telegraphDataservice, newsweekDataService) {
        this.bbcDataService = bbcDataService;
        this.abcDataService = abcDataService;
        this.cnnDataService = cnnDataService;
        this.guardianUkDataService = guardianUkDataService;
        this.apDataService = apDataService;
        this.wpDataService = wpDataService;
        this.ntDataService = ntDataService;
        this.gnDataService = gnDataService;
        this.alJazeeraDataSrevice = alJazeeraDataSrevice;
        this.independentDataService = independentDataService;
        this.usaTodayDataService = usaTodayDataService;
        this.timeDataservice = timeDataservice;
        this.telegraphDataservice = telegraphDataservice;
        this.newsweekDataService = newsweekDataService;
        this.news = [];
        this.allNews = [];
        this.selectedNews = {};
        this.likedNews = [];
        this.mode = 'Observable';
        this.sideMenu = [
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
                name: 'TIME MAGAZINE',
                show: 'timeNews'
            },
            {
                name: 'TELEGRAPH',
                show: 'telegraphNews'
            },
            {
                name: 'NEWSWEEK',
                show: 'newsweekNews'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkIsNewsInNewsHistory();
        this.checkIsNewsInLikedNews();
        this.getNews();
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getNews = function () {
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
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getBBCNews = function () {
        var _this = this;
        this.bbcDataService.getNews().subscribe(function (news) {
            _this.bbcNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getABCNews = function () {
        var _this = this;
        this.abcDataService.getNews().subscribe(function (news) {
            _this.abcNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getCNNNews = function () {
        var _this = this;
        this.cnnDataService.getNews().subscribe(function (news) {
            _this.cnnNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getGuardianUkNews = function () {
        var _this = this;
        this.guardianUkDataService.getNews().subscribe(function (news) {
            _this.guardianUkNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getAPNews = function () {
        var _this = this;
        this.apDataService.getNews().subscribe(function (news) {
            _this.apNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getWPNews = function () {
        var _this = this;
        this.wpDataService.getNews().subscribe(function (news) {
            _this.wpNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getNTNews = function () {
        var _this = this;
        this.ntDataService.getNews().subscribe(function (news) {
            _this.ntNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getGNNews = function () {
        var _this = this;
        this.gnDataService.getNews().subscribe(function (news) {
            _this.gnNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getAlJazeeraNews = function () {
        var _this = this;
        this.alJazeeraDataSrevice.getNews().subscribe(function (news) {
            _this.alJazeeraNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getindependentNews = function () {
        var _this = this;
        this.independentDataService.getNews().subscribe(function (news) {
            _this.independentNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getUSATodayNews = function () {
        var _this = this;
        this.usaTodayDataService.getNews().subscribe(function (news) {
            _this.usaTodayNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getTimeNews = function () {
        var _this = this;
        this.timeDataservice.getNews().subscribe(function (news) {
            _this.timeNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getTelegraphNews = function () {
        var _this = this;
        this.telegraphDataservice.getNews().subscribe(function (news) {
            _this.telegraphNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberOf HomeComponent
     */
    HomeComponent.prototype.getNewsweekNews = function () {
        var _this = this;
        this.newsweekDataService.getNews().subscribe(function (news) {
            _this.newsweekNews = news;
            news.map(function (single) { return _this.allNews.push(single); });
            _this.fillNews();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     * @param param
     */
    HomeComponent.prototype.show = function (param) {
        this.news = this[param];
    };
    /**
     *
     *
     * @param {*} event
     *
     * @memberof SportComponent
     */
    HomeComponent.prototype.search = function (event) {
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
    HomeComponent.prototype.showBig = function (param) {
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
    HomeComponent.prototype.fillNews = function () {
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
                if (single.description.length > 200) {
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
    HomeComponent.prototype.checkIsNewsInNewsHistory = function () {
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
    HomeComponent.prototype.addToNewsHistory = function (param) {
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
    HomeComponent.prototype.getNewsHistory = function () {
        return JSON.parse(localStorage.getItem('newsHistory'));
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.checkIsNewsInLikedNews = function () {
        if (!localStorage.getItem('likedNews')) {
            this.likedNews = [];
        }
        else {
            this.likedNews = this.getLikedNews();
        }
    };
    HomeComponent.prototype.addToLikedNews = function (param) {
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
    HomeComponent.prototype.getLikedNews = function () {
        return JSON.parse(localStorage.getItem('likedNews'));
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.removeNewsFromHistory = function (param) {
        this.newsHistory = this.newsHistory.filter(function (a) { return a.timeOfRead != param.timeOfRead; });
        localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.clearAllNewsFromHistory = function () {
        localStorage.removeItem('newsHistory');
        this.newsHistory = [];
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.like = function (param) {
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
    HomeComponent.prototype.unlike = function (param) {
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
    HomeComponent.prototype.clearAllNewsFromLikedNews = function (param) {
        localStorage.removeItem('likedNews');
        this.likedNews = [];
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        viewProviders: [http_1.Http],
        moduleId: module.id,
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [bbc_data_service_1.BBCDataService, abc_data_service_1.ABCDataService, cnn_data_service_1.CNNDataService, guardian_uk_data_service_1.GuardianUKDataService, ap_data_service_1.APDataService, wp_data_service_1.WPDataService, nt_data_service_1.NTDataService, google_news_data_service_1.GoogleNewsDataService, al_jazeera_data_service_1.AlJazeeraDataService, independent_data_service_1.IndependentDataService, usa_today_data_service_1.USATodayDataService, time_data_service_1.TimeDataService, telegraph_data_service_1.TelegraphDataService, newsweek_data_service_1.NewsweekDataService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map