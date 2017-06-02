"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
//ROUTER MODULE
var app_routes_module_1 = require("./app.routes.module");
//COMPONENTS
var app_component_1 = require("./app.component");
var header_component_1 = require("./templates/header/header.component");
var home_component_1 = require("./templates/home/home.component");
var business_component_1 = require("./templates/business/business.component");
var entertainment_component_1 = require("./templates/entertainment/entertainment.component");
var sport_component_1 = require("./templates/sport/sport.component");
var technology_component_1 = require("./templates/technology/technology.component");
var modal_component_1 = require("./templates/modal/modal.component");
var news_list_component_1 = require("./templates/news-list/news-list.component");
var side_menu_component_1 = require("./templates/side-menu/side-menu.component");
var news_history_component_1 = require("./templates/news-history/news-history.component");
var liked_news_component_1 = require("./templates/liked-news/liked-news.component");
//GENERAL NEWS SERVICES
var bbc_data_service_1 = require("./services/general/bbc-data-service");
var abc_data_service_1 = require("./services/general/abc-data-service");
var cnn_data_service_1 = require("./services/general/cnn-data-service");
var guardian_uk_data_service_1 = require("./services/general/guardian-uk-data-service");
var ap_data_service_1 = require("./services/general/ap-data-service");
var wp_data_service_1 = require("./services/general/wp-data-service");
var nt_data_service_1 = require("./services/general/nt-data-service");
var google_news_data_service_1 = require("./services/general/google-news-data-service");
var al_jazeera_data_service_1 = require("./services/general/al-jazeera-data-service");
var independent_data_service_1 = require("./services/general/independent-data-service");
var usa_today_data_service_1 = require("./services/general/usa-today-data-service");
var time_data_service_1 = require("./services/general/time-data-service");
var telegraph_data_service_1 = require("./services/general/telegraph-data-service");
var newsweek_data_service_1 = require("./services/general/newsweek-data-service");
//SPORT NEWS SERVICES
var sport_bible_data_service_1 = require("./services/sport/sport-bible-data-service");
var talksport_data_service_1 = require("./services/sport/talksport-data-service");
var nfl_data_service_1 = require("./services/sport/nfl-data-service");
var fox_sport_data_service_1 = require("./services/sport/fox-sport-data-service");
var fourfourtwo_data_service_1 = require("./services/sport/fourfourtwo-data-service");
var football_italia_data_service_1 = require("./services/sport/football-italia-data-service");
var espn_data_service_1 = require("./services/sport/espn-data-service");
var bbc_sport_data_service_1 = require("./services/sport/bbc-sport-data-service");
//BUSINESS NEWS SERVICES
var wall_street_jurnal_data_service_1 = require("./services/business/wall-street-jurnal-data-service");
var business_insider_data_service_1 = require("./services/business/business-insider-data-service");
var cnbc_data_service_1 = require("./services/business/cnbc-data-service");
var fortune_data_service_1 = require("./services/business/fortune-data-service");
var economist_data_service_1 = require("./services/business/economist-data-service");
//TECHNOLOGY NEWS SERVICES
var tech_crunch_data_service_1 = require("./services/technology/tech-crunch-data-service");
var engadget_data_service_1 = require("./services/technology/engadget-data-service");
var hacker_news_data_service_1 = require("./services/technology/hacker-news-data-service");
var recode_data_service_1 = require("./services/technology/recode-data-service");
var techradar_data_service_1 = require("./services/technology/techradar-data-service");
var next_web_data_service_1 = require("./services/technology/next-web-data-service");
var verge_data_service_1 = require("./services/technology/verge-data-service");
//ENTERTAINMENT NEWS SERVICES
var buzzfeed_data_service_1 = require("./services/entertainment/buzzfeed-data-service");
var daily_mail_data_service_1 = require("./services/entertainment/daily-mail-data-service");
var entertainment_weekly_data_service_1 = require("./services/entertainment/entertainment-weekly-data-service");
var mashable_data_services_1 = require("./services/entertainment/mashable-data-services");
var the_lad_bible_data_service_1 = require("./services/entertainment/the-lad-bible-data-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_module_1.AppRouter
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            home_component_1.HomeComponent,
            business_component_1.BusinessComponent,
            entertainment_component_1.EntertainmentComponent,
            sport_component_1.SportComponent,
            technology_component_1.TechnologyComponent,
            modal_component_1.ModalComponent,
            news_list_component_1.NewsListComponent,
            side_menu_component_1.SideMenuComponent,
            news_history_component_1.NewsHistoryComponent,
            liked_news_component_1.LikedNewsComponent
        ],
        providers: [
            bbc_data_service_1.BBCDataService,
            abc_data_service_1.ABCDataService,
            cnn_data_service_1.CNNDataService,
            guardian_uk_data_service_1.GuardianUKDataService,
            ap_data_service_1.APDataService,
            wp_data_service_1.WPDataService,
            nt_data_service_1.NTDataService,
            google_news_data_service_1.GoogleNewsDataService,
            al_jazeera_data_service_1.AlJazeeraDataService,
            independent_data_service_1.IndependentDataService,
            usa_today_data_service_1.USATodayDataService,
            time_data_service_1.TimeDataService,
            telegraph_data_service_1.TelegraphDataService,
            newsweek_data_service_1.NewsweekDataService,
            sport_bible_data_service_1.SportsBibleDataService,
            talksport_data_service_1.TalkSportDataService,
            nfl_data_service_1.NFLDataService,
            fox_sport_data_service_1.FoxSportDataService,
            fourfourtwo_data_service_1.FourFourTwoDataService,
            football_italia_data_service_1.FootballItaliaDataService,
            espn_data_service_1.ESPNDataService,
            bbc_sport_data_service_1.BBCSportDataService,
            wall_street_jurnal_data_service_1.WallStreetJournalDataService,
            business_insider_data_service_1.BusinessInsiderDataService,
            cnbc_data_service_1.CNBCDataService,
            fortune_data_service_1.FortneDataService,
            economist_data_service_1.EconomistDataService,
            tech_crunch_data_service_1.TechCrunchDataService,
            engadget_data_service_1.EngadgetDataService,
            hacker_news_data_service_1.HackerNewsDataService,
            recode_data_service_1.RecodeDataService,
            techradar_data_service_1.TechRadarDataService,
            next_web_data_service_1.TheNextWebDataService,
            verge_data_service_1.TheVergeDataService,
            buzzfeed_data_service_1.BuzzFeedDataService,
            daily_mail_data_service_1.DailyMailDataService,
            entertainment_weekly_data_service_1.EntertainmentWeeklyDataService,
            mashable_data_services_1.MashableDataService,
            the_lad_bible_data_service_1.TheLadBibleDataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map