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
var sport_bible_data_service_1 = require("../../services/sport/sport-bible-data-service");
var talksport_data_service_1 = require("../../services/sport/talksport-data-service");
var nfl_data_service_1 = require("../../services/sport/nfl-data-service");
var fox_sport_data_service_1 = require("../../services/sport/fox-sport-data-service");
var fourfourtwo_data_service_1 = require("../../services/sport/fourfourtwo-data-service");
var football_italia_data_service_1 = require("../../services/sport/football-italia-data-service");
var espn_data_service_1 = require("../../services/sport/espn-data-service");
var bbc_sport_data_service_1 = require("../../services/sport/bbc-sport-data-service");
/**
 *
 *
 * @export
 * @class SportComponent
 * @implements {OnInit}
 */
var SportComponent = (function () {
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
    function SportComponent(sportsBibleDataService, talkSportDataService, nflDataService, foxSportDataService, fourFourTwoDataService, footballItaliaDataService, espnDataService, bbcSportDataService) {
        this.sportsBibleDataService = sportsBibleDataService;
        this.talkSportDataService = talkSportDataService;
        this.nflDataService = nflDataService;
        this.foxSportDataService = foxSportDataService;
        this.fourFourTwoDataService = fourFourTwoDataService;
        this.footballItaliaDataService = footballItaliaDataService;
        this.espnDataService = espnDataService;
        this.bbcSportDataService = bbcSportDataService;
        this.news = [];
        this.allNews = [];
        this.selectedNews = {};
        this.likedNews = [];
        this.sideMenu = [
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
        ];
    }
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.ngOnInit = function () {
        this.checkIsNewsInNewsHistory();
        this.checkIsNewsInLikedNews();
        this.getNews();
        this.fillNews();
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getNews = function () {
        this.getSportBibleNews();
        this.getTalkSportNews();
        this.getNFLNews();
        this.getFoxSportNews();
        this.getFourFourTwoNews();
        this.getFootballItaliaNews();
        this.getEspnNews();
        this.getBbcSportNews();
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getSportBibleNews = function () {
        var _this = this;
        this.sportsBibleDataService.getNews().subscribe(function (news) {
            _this.sportBible = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getTalkSportNews = function () {
        var _this = this;
        this.talkSportDataService.getNews().subscribe(function (news) {
            _this.talkSport = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getNFLNews = function () {
        var _this = this;
        this.nflDataService.getNews().subscribe(function (news) {
            _this.nfl = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    }; /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getFoxSportNews = function () {
        var _this = this;
        this.foxSportDataService.getNews().subscribe(function (news) {
            _this.foxSport = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getFourFourTwoNews = function () {
        var _this = this;
        this.fourFourTwoDataService.getNews().subscribe(function (news) {
            _this.fourFourTwo = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getFootballItaliaNews = function () {
        var _this = this;
        this.footballItaliaDataService.getNews().subscribe(function (news) {
            _this.footballItalia = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getEspnNews = function () {
        var _this = this;
        this.espnDataService.getNews().subscribe(function (news) {
            _this.espn = news;
            news.map(function (single) { return _this.allNews.push(single); });
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *
     *
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.getBbcSportNews = function () {
        var _this = this;
        this.bbcSportDataService.getNews().subscribe(function (news) {
            _this.bbcSport = news;
            news.map(function (single) { return _this.allNews.push(single); });
            _this.fillNews();
        }, function (error) { return _this.errorMessage = error; });
    }; /**
     *
     *
     * @type {Array<any>}
     * @memberof SportComponent
     */
    /**
     *
     * @param param
     */
    SportComponent.prototype.show = function (param) {
        this.news = this[param];
    };
    /**
     *
     *
     * @param {*} event
     *
     * @memberof SportComponent
     */
    SportComponent.prototype.search = function (event) {
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
    SportComponent.prototype.showBig = function (param) {
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
    SportComponent.prototype.fillNews = function () {
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
    SportComponent.prototype.checkIsNewsInNewsHistory = function () {
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
    SportComponent.prototype.addToNewsHistory = function (param) {
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
    SportComponent.prototype.getNewsHistory = function () {
        return JSON.parse(localStorage.getItem('newsHistory'));
    };
    /**
     *
     *
     * @protected
     *
     * @memberof HomeComponent
     */
    SportComponent.prototype.checkIsNewsInLikedNews = function () {
        if (!localStorage.getItem('likedNews')) {
            this.likedNews = [];
        }
        else {
            this.likedNews = this.getLikedNews();
        }
    };
    SportComponent.prototype.addToLikedNews = function (param) {
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
    SportComponent.prototype.getLikedNews = function () {
        return JSON.parse(localStorage.getItem('likedNews'));
    };
    /**
     *
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    SportComponent.prototype.removeNewsFromHistory = function (param) {
        this.newsHistory = this.newsHistory.filter(function (a) { return a.timeOfRead != param.timeOfRead; });
        localStorage.setItem('newsHistory', JSON.stringify(this.newsHistory));
    };
    /**
     *
     *
     *
     * @memberof HomeComponent
     */
    SportComponent.prototype.clearAllNewsFromHistory = function () {
        localStorage.removeItem('newsHistory');
        this.newsHistory = [];
    };
    /**
     *
     * @param {*} param
     *
     * @memberof HomeComponent
     */
    SportComponent.prototype.like = function (param) {
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
    SportComponent.prototype.unlike = function (param) {
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
    SportComponent.prototype.clearAllNewsFromLikedNews = function (param) {
        localStorage.removeItem('likedNews');
        this.likedNews = [];
    };
    return SportComponent;
}());
SportComponent = __decorate([
    core_1.Component({
        selector: 'app-sport',
        viewProviders: [http_1.Http],
        moduleId: module.id,
        templateUrl: 'sport.component.html',
        styleUrls: ['sport.component.css']
    }),
    __metadata("design:paramtypes", [sport_bible_data_service_1.SportsBibleDataService, talksport_data_service_1.TalkSportDataService, nfl_data_service_1.NFLDataService, fox_sport_data_service_1.FoxSportDataService, fourfourtwo_data_service_1.FourFourTwoDataService, football_italia_data_service_1.FootballItaliaDataService, espn_data_service_1.ESPNDataService, bbc_sport_data_service_1.BBCSportDataService])
], SportComponent);
exports.SportComponent = SportComponent;
//# sourceMappingURL=sport.component.js.map