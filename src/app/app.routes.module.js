"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./templates/home/home.component");
var business_component_1 = require("./templates/business/business.component");
var entertainment_component_1 = require("./templates/entertainment/entertainment.component");
var sport_component_1 = require("./templates/sport/sport.component");
var technology_component_1 = require("./templates/technology/technology.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'business',
        component: business_component_1.BusinessComponent
    },
    {
        path: 'entertainment',
        component: entertainment_component_1.EntertainmentComponent
    },
    {
        path: 'sport',
        component: sport_component_1.SportComponent
    },
    {
        path: 'technology',
        component: technology_component_1.TechnologyComponent
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
var AppRouter = (function () {
    function AppRouter() {
    }
    return AppRouter;
}());
AppRouter = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: []
    })
], AppRouter);
exports.AppRouter = AppRouter;
//# sourceMappingURL=app.routes.module.js.map