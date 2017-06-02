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
var bbc_data_service_1 = require("../../services/bbc-data-service");
var abc_data_service_1 = require("../../services/abc-data-service");
var cnn_data_service_1 = require("../../services/cnn-data-service");
var guardian_uk_data_service_1 = require("../../services/guardian-uk-data-service");
var ap_data_service_1 = require("../../services/ap-data-service");
var wp_data_service_1 = require("../../services/wp-data-service");
var nt_data_service_1 = require("../../services/nt-data-service");
var google_news_data_service_1 = require("../../services/google-news-data-service");
var al_jazeera_data_service_1 = require("../../services/al-jazeera-data-service");
var independent_data_service_1 = require("../../services/independent-data-service");
var usa_today_data_service_1 = require("../../services/usa-today-data-service");
var time_data_service_1 = require("../../services/time-data-service");
var telegraph_data_service_1 = require("../../services/telegraph-data-service");
var HomeComponent = (function () {
    function HomeComponent(bbcDataService, abcDataService, cnnDataService, guardianUkDataService, apDataService, wpDataService, ntDataService, gnDataService, alJazeeraDataSrevice, independentDataService, usaTodayDataService, timeDataservice, telegraphDataservice) {
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
        this.mode = 'Observable';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
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
    };
    HomeComponent.prototype.getBBCNews = function () {
        var _this = this;
        this.bbcDataService.getNews()
            .subscribe(function (news) {
            _this.bbcNews = news;
            _this.news = news;
        }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getABCNews = function () {
        var _this = this;
        this.abcDataService.getNews()
            .subscribe(function (news) { return _this.abcNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getCNNNews = function () {
        var _this = this;
        this.cnnDataService.getNews()
            .subscribe(function (news) { return _this.cnnNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getGuardianUkNews = function () {
        var _this = this;
        this.guardianUkDataService.getNews()
            .subscribe(function (news) { return _this.guardianUkNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getAPNews = function () {
        var _this = this;
        this.apDataService.getNews()
            .subscribe(function (news) { return _this.apNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getWPNews = function () {
        var _this = this;
        this.wpDataService.getNews()
            .subscribe(function (news) { return _this.wpNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getNTNews = function () {
        var _this = this;
        this.ntDataService.getNews()
            .subscribe(function (news) { return _this.ntNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getGNNews = function () {
        var _this = this;
        this.gnDataService.getNews()
            .subscribe(function (news) { return _this.gnNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getAlJazeeraNews = function () {
        var _this = this;
        this.alJazeeraDataSrevice.getNews()
            .subscribe(function (news) { return _this.alJazeeraNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getindependentNews = function () {
        var _this = this;
        this.independentDataService.getNews()
            .subscribe(function (news) { return _this.independentNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getUSATodayNews = function () {
        var _this = this;
        this.usaTodayDataService.getNews()
            .subscribe(function (news) { return _this.usaTodayNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getTimeNews = function () {
        var _this = this;
        this.timeDataservice.getNews()
            .subscribe(function (news) { return _this.timeNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.getTelegraphNews = function () {
        var _this = this;
        this.telegraphDataservice.getNews()
            .subscribe(function (news) { return _this.telegraphNews = news; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.showCNNNews = function () {
        this.news = this.cnnNews;
    };
    HomeComponent.prototype.showBBCNews = function () {
        this.news = this.bbcNews;
    };
    HomeComponent.prototype.showABCNews = function () {
        this.news = this.abcNews;
    };
    HomeComponent.prototype.showGuarduianUkNews = function () {
        this.news = this.guardianUkNews;
    };
    HomeComponent.prototype.showAPNews = function () {
        this.news = this.apNews;
    };
    HomeComponent.prototype.showWPNews = function () {
        this.news = this.wpNews;
    };
    HomeComponent.prototype.showNTNews = function () {
        this.news = this.ntNews;
    };
    HomeComponent.prototype.showGNNews = function () {
        this.news = this.gnNews;
    };
    HomeComponent.prototype.showAlJazeeraNews = function () {
        this.news = this.alJazeeraNews;
    };
    HomeComponent.prototype.showIndependentNews = function () {
        this.news = this.independentNews;
    };
    HomeComponent.prototype.showUsaTodayNews = function () {
        this.news = this.usaTodayNews;
    };
    HomeComponent.prototype.showTimeNews = function () {
        this.news = this.timeNews;
    };
    HomeComponent.prototype.showTelegraphNews = function () {
        this.news = this.telegraphNews;
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
    __metadata("design:paramtypes", [typeof (_a = typeof bbc_data_service_1.BBCDataService !== "undefined" && bbc_data_service_1.BBCDataService) === "function" && _a || Object, typeof (_b = typeof abc_data_service_1.ABCDataService !== "undefined" && abc_data_service_1.ABCDataService) === "function" && _b || Object, typeof (_c = typeof cnn_data_service_1.CNNDataService !== "undefined" && cnn_data_service_1.CNNDataService) === "function" && _c || Object, typeof (_d = typeof guardian_uk_data_service_1.GuardianUKDataService !== "undefined" && guardian_uk_data_service_1.GuardianUKDataService) === "function" && _d || Object, typeof (_e = typeof ap_data_service_1.APDataService !== "undefined" && ap_data_service_1.APDataService) === "function" && _e || Object, typeof (_f = typeof wp_data_service_1.WPDataService !== "undefined" && wp_data_service_1.WPDataService) === "function" && _f || Object, typeof (_g = typeof nt_data_service_1.NTDataService !== "undefined" && nt_data_service_1.NTDataService) === "function" && _g || Object, typeof (_h = typeof google_news_data_service_1.GoogleNewsDataService !== "undefined" && google_news_data_service_1.GoogleNewsDataService) === "function" && _h || Object, typeof (_j = typeof al_jazeera_data_service_1.AlJazeeraDataService !== "undefined" && al_jazeera_data_service_1.AlJazeeraDataService) === "function" && _j || Object, typeof (_k = typeof independent_data_service_1.IndependentDataService !== "undefined" && independent_data_service_1.IndependentDataService) === "function" && _k || Object, typeof (_l = typeof usa_today_data_service_1.USATodayDataService !== "undefined" && usa_today_data_service_1.USATodayDataService) === "function" && _l || Object, typeof (_m = typeof time_data_service_1.TimeDataService !== "undefined" && time_data_service_1.TimeDataService) === "function" && _m || Object, typeof (_o = typeof telegraph_data_service_1.TelegraphDataService !== "undefined" && telegraph_data_service_1.TelegraphDataService) === "function" && _o || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=home.component.js.map