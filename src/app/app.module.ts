import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

//ROUTER MODULE
import { AppRouter } from "./app.routes.module";

//COMPONENTS
import { AppComponent }  from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { BusinessComponent } from "./templates/business/business.component";
import { EntertainmentComponent } from "./templates/entertainment/entertainment.component";
import { SportComponent } from "./templates/sport/sport.component";
import { TechnologyComponent } from "./templates/technology/technology.component";
import { ModalComponent } from "./templates/modal/modal.component";
import { NewsListComponent } from './templates/news-list/news-list.component';
import { SideMenuComponent } from './templates/side-menu/side-menu.component';
import { NewsHistoryComponent } from "./templates/news-history/news-history.component";
import { LikedNewsComponent } from './templates/liked-news/liked-news.component'

//GENERAL NEWS SERVICES
import {BBCDataService} from './services/general/bbc-data-service';
import {ABCDataService} from './services/general/abc-data-service';
import {CNNDataService} from './services/general/cnn-data-service';
import {GuardianUKDataService} from './services/general/guardian-uk-data-service';
import {APDataService} from './services/general/ap-data-service';
import {WPDataService} from './services/general/wp-data-service';
import {NTDataService} from './services/general/nt-data-service';
import {GoogleNewsDataService} from './services/general/google-news-data-service';
import {AlJazeeraDataService} from './services/general/al-jazeera-data-service';
import {IndependentDataService} from './services/general/independent-data-service';
import {USATodayDataService} from './services/general/usa-today-data-service';
import {TimeDataService} from './services/general/time-data-service';
import {TelegraphDataService} from './services/general/telegraph-data-service';
import {NewsweekDataService} from './services/general/newsweek-data-service';

//SPORT NEWS SERVICES
import { SportsBibleDataService} from "./services/sport/sport-bible-data-service";
import { TalkSportDataService } from "./services/sport/talksport-data-service";
import { NFLDataService } from "./services/sport/nfl-data-service";
import { FoxSportDataService } from "./services/sport/fox-sport-data-service";
import { FourFourTwoDataService } from "./services/sport/fourfourtwo-data-service";
import { FootballItaliaDataService } from "./services/sport/football-italia-data-service";
import { ESPNDataService } from './services/sport/espn-data-service';
import { BBCSportDataService } from './services/sport/bbc-sport-data-service';

//BUSINESS NEWS SERVICES
import { WallStreetJournalDataService } from "./services/business/wall-street-jurnal-data-service";
import { BusinessInsiderDataService } from "./services/business/business-insider-data-service";
import { CNBCDataService } from "./services/business/cnbc-data-service";
import { FortneDataService } from "./services/business/fortune-data-service";
import { EconomistDataService } from "./services/business/economist-data-service";

//TECHNOLOGY NEWS SERVICES
import { TechCrunchDataService } from "./services/technology/tech-crunch-data-service";
import { EngadgetDataService } from './services/technology/engadget-data-service';
import { HackerNewsDataService } from './services/technology/hacker-news-data-service';
import { RecodeDataService } from './services/technology/recode-data-service';
import { TechRadarDataService } from './services/technology/techradar-data-service';
import { TheNextWebDataService } from './services/technology/next-web-data-service';
import { TheVergeDataService } from './services/technology/verge-data-service'

//ENTERTAINMENT NEWS SERVICES
import { BuzzFeedDataService } from "./services/entertainment/buzzfeed-data-service";
import { DailyMailDataService } from "./services/entertainment/daily-mail-data-service";
import { EntertainmentWeeklyDataService } from "./services/entertainment/entertainment-weekly-data-service";
import { MashableDataService } from "./services/entertainment/mashable-data-services";
import { TheLadBibleDataService } from "./services/entertainment/the-lad-bible-data-service";
import { MTVNewsDataService } from "./services/entertainment/mtv-news-data-service";

@NgModule({
  imports:[ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRouter 
    ],
  declarations:[ 
    AppComponent, 
    HeaderComponent, 
    HomeComponent, 
    BusinessComponent, 
    EntertainmentComponent, 
    SportComponent, 
    TechnologyComponent,
    ModalComponent,
    NewsListComponent,
    SideMenuComponent,
    NewsHistoryComponent,
    LikedNewsComponent
    ],
  providers:  [
    BBCDataService,
    ABCDataService,
    CNNDataService,
    GuardianUKDataService,
    APDataService,
    WPDataService,
    NTDataService, 
    GoogleNewsDataService, 
    AlJazeeraDataService, 
    IndependentDataService, 
    USATodayDataService, 
    TimeDataService,
    TelegraphDataService, 
    NewsweekDataService, 
    SportsBibleDataService, 
    TalkSportDataService, 
    NFLDataService, 
    FoxSportDataService, 
    FourFourTwoDataService, 
    FootballItaliaDataService,
    ESPNDataService, 
    BBCSportDataService, 
    WallStreetJournalDataService, 
    BusinessInsiderDataService, 
    CNBCDataService, 
    FortneDataService, 
    EconomistDataService, 
    TechCrunchDataService,
    EngadgetDataService,
    HackerNewsDataService,
    RecodeDataService,
    TechRadarDataService,
    TheNextWebDataService,
    TheVergeDataService,
    BuzzFeedDataService,
    DailyMailDataService,
    EntertainmentWeeklyDataService,
    MashableDataService,
    TheLadBibleDataService,
    MTVNewsDataService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
